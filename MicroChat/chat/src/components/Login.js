import React from "react"

import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'

import firebase from "firebase/app"

import { auth } from "../firebase"




export default function Login() {
  return (     
<div class="container" onclick="onclick">
  <div class="top"></div>
  <div class="bottom"></div>
  <div class="center">
    <br></br>
    <h2>Welcome to MicroChat!</h2>
    <div
          className='login-button google'
          onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
        >
          <GoogleOutlined /> Sign In with Google
        </div>
        <br></br>

    <div
      className='login-button facebook'
      onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider()) }
    >
      <FacebookOutlined /> Sign In with Facebook
    </div>
    
    <h2>&nbsp;</h2>
  </div>
</div>
  )}
