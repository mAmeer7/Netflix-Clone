import React, { useState } from 'react'
import './LoginScreen.css'
import banner from './img/Banner.jpg'
import SignInScreen from './SignInScreen'
import logo from './img/netflix-logo-png-2562.png'



export default function LoginScreen() {

    const [signIn,setSignIn]=useState(false)

  return (
    <div className="login-screen" style={{backgroundImage: `linear-gradient( to top ,rgba(0,0,0,0.7)0,rgba(0,0,0,0.2)10%,rgba(0,0,0,0.7)100%), url(${banner})`}}>
        <div className="loginscreen-bg" >
            <img onClick={()=>{ window.location.reload()}} src={logo} className='ls-logo' alt="" />
            <button className='ls-btn' onClick={()=>setSignIn(true)}>Sign 
            In</button>
        </div>
                    <div className="ls-body">
                        {signIn? <SignInScreen/>:
                        
                        <>
                        <h1>Unlimited movies, TV shows and more.</h1>
                        <h2>Watch anywhere. Cancel anytime.</h2>
                        <h2>Ready to watch? Enter your email to create or restart your membership.</h2>
                        <div className="ls-input">
                        
                            <input type='email' placeholder='Enter Email' />
                            <button onClick={()=>setSignIn(true)} className='gs-btn'>Get Started</button>
                       

                        </div>
                        
                        </>}
                        
                    </div>

    </div>
  )
}
