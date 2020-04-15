import React from 'react';


import COLLECTION_DATA from './collection.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import './collection.styles.scss';

class CollectionPage extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            collections: COLLECTION_DATA
        }
    }




    render(){
        return(
        <div>
            {
                this.state.collections.map( ({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }
        </div>
        );
    }   

};

export default CollectionPage;