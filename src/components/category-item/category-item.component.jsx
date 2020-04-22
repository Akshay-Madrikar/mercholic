import React from 'react';
import { withRouter } from 'react-router-dom';

import './category-item.styles.css';

const CategoryItem = ({ id, name, imageUrl, linkUrl, history, match }) => {

    return (
        <div>
        <div className="category card-group">
        <div className="container align-items-center d-flex justify-content-center m-4 p-4" 
        onClick={() => history.push(`${linkUrl}`)}>
            <div className="category-item-card card" style={{ 
                backgroundImage: `url(${imageUrl})`
            }}>
                <div className="card-body align-items-center d-flex justify-content-center">
                    <p className="category-item-btn btn mt-auto rounded-0">
                        EXPLORE
                    </p>
                </div>
            </div>     
        </div>
        </div>
            <p className="category-item-title text-center">{name}</p>
        </div>
    );
};

export default withRouter(CategoryItem);