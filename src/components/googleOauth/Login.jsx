import React, { useState } from 'react';
import {signInWithPopup} from "firebase/auth";
import { auth, provider } from './config';

const Login = () => {
  const [value, setValue] = useState("");

  const handleLogin = () => {
    // signInWithPopup(auth,provider).then((data)=>{
    //   setValue(data.user.email);
    // })
    console.log("clickd")
  }
  return (
    <div className='loginDiv'>
      <br />
      <h1 className='googleH1'>To continue </h1>
      <img className='loginImg' src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png" alt="googleOAuthImg" onClick={()=>{handleLogin()}} />
    </div>
  )
}

export default Login