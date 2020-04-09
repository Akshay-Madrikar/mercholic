import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, data }) => {

    return(
        <div>
            {/* <h1>{title.toUpperCase()}</h1>
            <div>
                {
                    data.map(({ id, ...otherItemProps }) => (
                    <CollectionItem key={id} {...otherItemProps}/>
                    ))
                }
            </div> */}

            <div className="container mt-3 p-3">
                <h1>{title.toUpperCase()}</h1>
                    <div className="row">
                        {
                      data.map( ({ id, ...otherItemProps }) => 
                            (   
                              <div key={id} className="col-md-3">
                                <CollectionItem  {...otherItemProps} />
                              </div>
                              
                            ))
                        }
                       </div> 
             </div> 
        </div>
    );

};

export default CollectionPreview;