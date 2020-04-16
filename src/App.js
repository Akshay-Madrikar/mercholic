import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './singlePages/homepage/homepage.component';
import Header from './components/header/header.component';
import ContactPage from './singlePages/contact/contact.component';
import ExplorePage from './singlePages/explore/explore.component';
import SignUpAndSignInPage from './singlePages/signInAndsignUp/signInAndsignUp.component';
import CheckoutPage from './singlePages/checkout/checkout.component';

import { auth, createUserProfileDocument } from './firebase/firebase.util'; 
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import './App.css';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      
      if( userAuth ) {
        const userRef = await createUserProfileDocument( userAuth );

        userRef.onSnapshot( snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
        });
      } else {
        setCurrentUser( userAuth );
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  
  render() {
    return (
      <div className="App">
          <Header/>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/contact' component={ContactPage} />
            <Route path='/explore' component={ExplorePage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/signIn' 
              render={() => this.props.currentUser ? 
                (<Redirect to="/"/>) : 
                (<SignUpAndSignInPage />)} 
            />
          </Switch>
      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch( setCurrentUser( user ) )
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
