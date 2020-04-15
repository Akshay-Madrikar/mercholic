import React from 'react';


import EXPLORE_DATA from '../explore/explore.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import './collection.styles.scss';

class CollectionPage extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            collections: EXPLORE_DATA
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