import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';


import { auth } from '../../firebase/firebase.util';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
//import { ReactComponent as Logo } from '../../assets/logo.svg';
import './header.styles.css';

const Header = ({ currentUser, hidden }) => {

    return (

    <nav className="navbar navbar-inverse navbar-fixed-top navbar-expand-lg navbar-light m-3" role="navigation">
            <div className="container-fluid">
            
                <div className="navbar-header pull-left">
                    <Link to="/" className="navbar-brand"><h3>Mercholic</h3></Link>
                </div>
                
                 
                
                <div className="pull-right">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
               
                
               
                <div className="collapse navbar-collapse " id="navbarToggler">
                    <ul className="nav navbar-nav">
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
                <div className="navbar-header pull-right">
                    <CartIcon className="navbar-brand"/>
                </div> 
                {
                    hidden ? null : <CartDropdown />
                }
                
            </div>
            
        </nav>
       
    
        /* <nav className="navbar navbar-expand-lg navbar-light m-3">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to="/">
                    <h3>Mercholic</h3>
                </Link>
            
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
                    <li className="header-item  nav-item">
                    <CartIcon />
                    </li>
                </ul>
            </div>
        </nav> */

        
       
    );
};

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);