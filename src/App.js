import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './singlePages/homepage/homepage.component';
import Header from './components/header/header.component';
import ContactPage from './singlePages/contact/contact.component';
import ShopPage from './singlePages/shop/shop.component';
import SignUpAndSignInPage from './singlePages/signInAndsignUp/signInAndsignUp.component';
 
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/contact' component={ContactPage} />
          <Route exact path='/explore' component={ShopPage} />
          <Route exact path='/signIn' component={SignUpAndSignInPage} />
        </Switch>
    </div>
  );
}

export default App;
