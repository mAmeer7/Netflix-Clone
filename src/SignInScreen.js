import React, { useRef } from 'react'
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import './SignInScreen.css'


export default function SignInScreen() {

    //authentication process code *
const emailRef= useRef(null);
const passRef= useRef(null);

        const signIn =(e) =>{
            e.preventDefault()
            signInWithEmailAndPassword(auth,
                emailRef.current.value,
                passRef.current.value
                ).then((authUser)=>{})
                .catch((error)=>{
                    alert(error.message)
                })
        }
        const register=(e)=>{
                e.preventDefault()
                createUserWithEmailAndPassword(auth,
                    emailRef.current.value,
                    passRef.current.value
                ).then((authUser)=>{})
                    .catch((error)=>{
                        alert(error.message)
                    })
                
        }
         //authentication process code **

  return (
    <>
    <div className="signupscreen">
        <form >
            <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder='Email' />
        <input ref={passRef} type="password" placeholder='Password'/>
        <button type="submit" onClick={signIn}>Sign In</button>
        <h4><span className="signupgrey">New to Netflix? </span> <span className="link-signup" onClick={register}>Sign Up</span> </h4>
        </form>
    </div>

    </>
  )
}
