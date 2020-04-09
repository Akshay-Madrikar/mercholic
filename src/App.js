import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './singlePages/homepage/homepage.component';
//import Header from './components/header/header.component';
import ContactPage from './singlePages/contact/contact.component';
import ShopPage from './singlePages/shop/shop.component';
 
import './App.css';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/contact' component={ContactPage} />
          <Route exact path='/shop' component={ShopPage} />
        </Switch>
    </div>
  );
}

export default App;
