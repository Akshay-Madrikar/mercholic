import React from 'react';

const MenuItem = ({ title, imageUrl }) => {
    return (
        <div 
        className="container align-items-center d-flex justify-content-center m-4 p-4"
        >
            <div className="card" style={{ 
                backgroundImage: `url(${imageUrl})`,
                width: "18rem",
                height: "13rem",
                backgroundPosition: "center",
                backgroundSize: "cover"
            }}>
                <img className="card-img-top"/>
                <div className="card-body align-items-center d-flex justify-content-center">
                    <p className="btn btn-outline-secondary rounded-0">
                        <span>{title}</span><br/>
                        <span>SHOP NOW</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;