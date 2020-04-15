import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ name, items }) => {
    return(
        
        <div>
            <div className="container mt-3 p-3">
                <h1>{name.toUpperCase()}</h1>
                    <div className="row">
                        {
                            
                            items.map( (item) => 
                                    (   
                                    <div key={item.id} className="col-md-3">
                                        {
                                            <CollectionItem  item={item} />
                                            }
                                    
                                    </div>
                                    
                                    ))
                        }
                    </div> 
            </div> 
        </div>
    );

};

export default CollectionPreview;