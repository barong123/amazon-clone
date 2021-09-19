// import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe(
  'pk_test_51JZe1aCSupV8rhrjW46KSXZ7p4uT2oLLeoWJBIyLlGQSaGxdob3Sl1uSoOIfQray16zlNzyt5PelasZJCnK8EQAX00gr32y1bV');

function App() {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads

    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>> ', authUser);

      if (authUser) {
        // the user just logged in || the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>

          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path='/orders'>
            <Orders />
          </Route>

          <Route path='/'>
            <Header />
            <Home />
          </Route> 

        </Switch>
      </div>
  </Router>
  );
}

export default App;
