import React from 'react';

import './collection-item.styles.css';

const CollectionItem = ({ id, name, imageUrl }) => {
    
    return (
        <div>
        <div className="card-group">
        <div className="container align-items-center d-flex justify-content-center m-3 p-1" >
            <div className="collection-item-card card" style={{ 
                backgroundImage: `url(${imageUrl})`
            }}>
                <div className="card-body align-items-center d-flex flex-column">
                    <p className="item-btn btn mt-auto rounded-0">
                        <span className="item-slogan">EXPLORE</span>
                    </p>
                </div>
            </div>     
        </div>
        </div>
            <p className="item-title text-center">{name}</p>
        </div>
    );
};

export default CollectionItem;