import React, {useState, useEffect} from 'react';
import AuthSignIn from './auth/AuthSignIn'
import MainPage from './MainPage';

function SignInPage () {
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

  const protectedViewsSignIn = () => {
      return (sessionToken === localStorage.getItem('token') ?
          <MainPage token={sessionToken} /> : <AuthSignIn updateToken={updateToken} />)
    }

  return (
      <div>
          Sign In Page
          {protectedViewsSignIn()}
      </div>
  )
}

export default SignInPage;