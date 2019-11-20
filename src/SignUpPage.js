import React, {useState, useEffect} from 'react';
import AuthSignUp from './auth/AuthSignUp'
import MainPage from './MainPage';

function SignUpPage () {
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

    const protectedViewsSignUp = () => {
        return (sessionToken === localStorage.getItem('token') ?
            <MainPage token={sessionToken} /> : <AuthSignUp updateToken={updateToken} />)
      }

    return (
        <div>
            Sign Up Page
            {protectedViewsSignUp()}
        </div>
    )
}

export default SignUpPage;