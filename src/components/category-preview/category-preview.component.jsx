import React from 'react';

import CategoryItem from '../category-item/category-item.component';

const CategoryPreview = ({ title, data }) => {
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
                                <CategoryItem  {...otherItemProps} />
                              </div>
                              
                            ))
                        }
                       </div> 
             </div> 
        </div>
    );

};

export default CategoryPreview;