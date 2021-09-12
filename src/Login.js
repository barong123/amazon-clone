import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import './Login.css';
import { auth } from './firebase';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        history.push('/')
      })
      .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // if success
        console.log(userCredential);
        if (userCredential) {
          history.push('/')
        }
      })
      .catch(error => alert(error.message))
    
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="login logo" />
      </Link>
      
      <div className="login__container">
        <h1>Sign-in</h1>

          <form action="">
            <h5>E-mail</h5>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

            <h5>Password</h5>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

            <button 
            className='login__signinButton' 
            onClick={signIn} type='submit'>Sign In</button>
          </form>
          <p>
              By using the Amazon Services, you agree, on behalf of yourself and all members of your household and others who use any Service under your account, to the following conditions.sa
          </p>

          <button className='login__registerButton'
          onClick={register}>Create your Amazon account</button>
          
      </div>
    </div>
  )
}

export default Login
