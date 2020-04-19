import React from 'react';
import { connect } from 'react-redux';

import { selectCollectionItems } from '../../redux/collection/collection.selectors';
import CollectionItemCategory from '../../components/collection-item-category/collection-item-category.component';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.util';
import { updateCollection } from '../../redux/collection/collection.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import './collection.styles.scss';

const CollectionItemCategoryWithSpinner = WithSpinner(CollectionItemCategory);

class CollectionPage extends React.Component {

    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollection } = this.props;
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapShot => {
          const collectionMap = convertCollectionSnapshotToMap(snapShot);
          updateCollection(collectionMap);
          this.setState({ loading: false });
        });
    };
    // console.log(itemName[0])
    // console.log(itemlinkUrl[0])
    render(){
        const collection = this.props;
        const { name, items } = collection;
        const { loading } = this.state;
        console.log(collection);
        console.log(name, items);
        return(
            <div >
                <h1 className="text-center">{name.toUpperCase()}</h1> 
                {
                    items.map( (item) => (
                     <CollectionItemCategoryWithSpinner isLoading={loading} id={item.id} item={item}/>)
                    )  
                }
            </div>
        );
    }
};

const mapStateToProps = ( state, ownProps ) => ({
    collection: selectCollectionItems(ownProps.match.params.collectionId)(state)
});

const mapDispatchToProps = dispatch => ({
    updateCollection: collectionMap => dispatch( updateCollection( collectionMap ) )
});

export default connect(mapStateToProps,mapDispatchToProps)(CollectionPage);

// class CollectionPage extends React.Component {
    
//     constructor(props){
//         super(props);

//         this.state = {
//             collections: COLLECTION_DATA
//         }

//         console.log(props.match.params.collectionId)
//     }




//     render(){
//         return(
//         <div>
//             {
//                 this.state.collections.map( ({ id, ...otherCollectionProps }) => (
//                     <CollectionPreview key={id} {...otherCollectionProps}/>
//                 ))
//             }
//         </div>
//         );
//     }   

// };

    // const collectionItem = () => {
    //     const items = []
    //     const itemName = data.map(item => item.name)
    //     const itemlinkUrl = data.map(item => item.linkUrl)
    //     for(let i=0; i<data.length; i++){
    //         if (itemName.toLowerCase() === itemlinkUrl.substr(itemlinkUrl.lastIndexOf('/') + 1)){
    //             items.push(<CollectionPreview />)
    //         }
    //     }

    //     return items;
    // }