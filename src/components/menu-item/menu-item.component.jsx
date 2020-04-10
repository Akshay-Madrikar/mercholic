import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.css';

const MenuItem = ({ title, imageUrl, history, match, linkUrl }) => {
    return (
        <div className="container align-items-center d-flex justify-content-center m-4 p-4" 
        onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <div className="menu-card card" style={{ 
                backgroundImage: `url(${imageUrl})`
            }}>
                <div className="menu-body card-body align-items-center d-flex justify-content-center">
                    <p className="btn  rounded-0">
                        <span className="menu-title">{title.toUpperCase()}</span><br/>
                        <span className="menu-slogan">SHOP NOW</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default withRouter(MenuItem);