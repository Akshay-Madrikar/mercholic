import React from 'react';

import { Link } from 'react-router-dom';

//import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header = () => {

    return (
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light m-3">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to="/">Mercholic</Link>
            
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav ml-auto mt-2 mt-md-0">
                    <li className="nav-item">
                    <Link className="nav-link" to="/explore">Explore</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/signIn">Sign In</Link>
                    </li>
                </ul>
                </div>
        </nav>
    </div>
        
       
    );
};

export default Header;