import React from 'react';

import './collection-item.styles.css';

const CollectionItem = ({ id, name, imageUrl }) => {
    
    return (
        <div className="card-group">
        <div className="container align-items-center d-flex justify-content-center m-3 p-1" >
            <div className="collection-item-card card" style={{ 
                backgroundImage: `url(${imageUrl})`
            }}>
                <div className="card-body align-items-center d-flex justify-content-center">
                    <p className="btn rounded-0">
                        <span className="item-slogan">EXPLORE</span>
                    </p>
                </div>
            </div>     
        </div>
        <span className="item-title text-center">{name}</span>
        </div>
        

    );
};

export default CollectionItem;