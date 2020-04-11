import React from 'react';

import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.util';

//import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header = ({ currentUser }) => {

    return (
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light m-3">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to="/"><h3>Mercholic</h3></Link>
            
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav ml-auto mt-2 mt-md-0">
                    <li className="header-item nav-item">
                    <Link className="nav-link" to="/explore"><h5>Explore</h5></Link>
                    </li>
                    <li className="header-item nav-item">
                    <Link className="nav-link" to="/contact"><h5>Contact</h5></Link>
                    </li>
                    <li className="header-item nav-item">
                    {
                        currentUser ? (
                        <div className="nav-link" onClick={() => auth.signOut()}><h5>Sign Out</h5></div>
                        ) : (
                        <Link className="nav-link" to="/signIn"><h5>Sign In</h5></Link>
                        )
                    }
                    </li>
                </ul>
                </div>
        </nav>
    </div>
        
       
    );
};

export default Header;