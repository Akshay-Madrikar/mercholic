import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({name, items, linkUrl }) => {
    
    //const { name } = items.map(item => item.name === )
    // console.log(name.toLowerCase())
    // console.log(linkUrl.substr(linkUrl.lastIndexOf('/') + 1))
    return(
        
        <div>
            <div className="container mt-3 p-3">
                {/* <h1>{name.toUpperCase()}</h1> */}
                    <div className="row">
                        {
                            
                            items.map( (item) => 
                                    (   
                                    <div key={item.id} className="col-md-6">
                                        {
                                            <CollectionItem  item={item} />
                                        }    
                                    </div>))
                              
                        }
                    </div> 
            </div> 
        </div>
    );

};

export default CollectionPreview;