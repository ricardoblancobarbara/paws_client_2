import React, {useState, useEffect} from 'react';
/*import {Navbar, Container, Button} from 'reactstrap';*/
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Sitebar from './Sitebar';

import HomePage from './HomePage';
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';

import MainPage from './MainPage';
import SellerPage from './SellerPage';
import BuyerPage from './BuyerPage';
import MainTable from './MainTable';
import AuthSignIn from './auth/AuthSignIn';

{/*
import ServiceIndex from './services/ServiceIndex';
import AuthSignUp from './auth/AuthSignUp';

import Auth from './auth/Auth'
*/}


function App() {  
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'))
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }
/*
  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ?
        <ServiceIndex token={sessionToken} /> : <Auth updateToken={updateToken} />)
  }
*/
  const protectedViewsSignIn = () => {
    return (sessionToken === localStorage.getItem('token') ?
        <MainTable token={sessionToken} /> : <AuthSignIn updateToken={updateToken} />)
  }
/*
  const protectedViewsSignUp = () => {
    return (sessionToken === localStorage.getItem('token') ?
        <ServiceIndex token={sessionToken} /> : <AuthSignUp updateToken={updateToken} />)
  }
*/

  return (
    <Router>
      <Sitebar clickLogout={clearToken} token={sessionToken}/>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/signin' component={SignInPage} />
        <Route path='/signup' component={SignUpPage} />
        
        {/* <Route path='/main' component={MainPage}>  */}
        <Route path='/main' > 
        {(sessionToken === localStorage.getItem('token') ?
        <MainTable token={sessionToken} /> : <AuthSignIn updateToken={updateToken} />)}</Route>
        
        {/* <Route path='/seller' component={SellerPage} /> */}
        <Route path='/seller'>
        {(sessionToken === localStorage.getItem('token') ? <SellerPage token={sessionToken} /> : <></>)}</Route>
        
        {/* <Route path='/serviceindex' component={ServiceIndex} /> */}
        <Route path='/buyer' component={BuyerPage}>
        
        {(sessionToken === localStorage.getItem('token') ? <BuyerPage token={sessionToken} /> : <></>)}</Route>
       {/* {protectedViewsSignIn()} */}
      </Switch>
    </Router>
  )
}

export default App;
