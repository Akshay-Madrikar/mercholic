import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './singlePages/homepage/homepage.component';
import Header from './components/header/header.component';
import ContactPage from './singlePages/contact/contact.component';
import ShopPage from './singlePages/shop/shop.component';
import SignUpAndSignInPage from './singlePages/signInAndsignUp/signInAndsignUp.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util'; 
import { setCurrentUser } from './redux/user/user.actions';

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
            <Route path='/contact' component={ContactPage} />
            <Route exact path='/explore' component={ShopPage} />
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

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch( setCurrentUser( user ) )
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
