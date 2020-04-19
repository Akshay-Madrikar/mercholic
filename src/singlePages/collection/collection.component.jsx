import React from 'react';
import { connect } from 'react-redux';

import { selectCollectionItems } from '../../redux/collection/collection.selectors';
import CollectionItemCategory from '../../components/collection-item-category/collection-item-category.component';
import './collection.styles.scss';

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

const CollectionPage = ({ collection } ) => {
    const { name, items } = collection;

   console.log(collection)
   console.log(name, items)
    // console.log(itemName[0])
    // console.log(itemlinkUrl[0])

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
    


    return(
        <div >
            <h1 className="text-center">{name.toUpperCase()}</h1> 
            {
                items.map( (item) => (
                 <CollectionItemCategory key={item.id} item={item}/>)
                )  
            }
     </div>
    );
};

const mapStateToProps = ( state, ownProps ) => ({
    collection: selectCollectionItems(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);