import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './singlePages/homepage/homepage.component';
import Header from './components/header/header.component';
import ContactPage from './singlePages/contact/contact.component';
import ShopPage from './singlePages/shop/shop.component';
import SignUpAndSignInPage from './singlePages/signInAndsignUp/signInAndsignUp.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util'; 

import './App.css';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      
      if( userAuth ) {
        const userRef = await createUserProfileDocument( userAuth );

        userRef.onSnapshot( snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log(this.state)
          })
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/contact' component={ContactPage} />
            <Route exact path='/explore' component={ShopPage} />
            <Route exact path='/signIn' component={SignUpAndSignInPage} />
          </Switch>
      </div>
    );
  }
}

export default App;
