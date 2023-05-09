import React, { useState } from 'react'
import './LoginScreen.css'
import SignupScreen from './SignupScreen';

const LoginScreen = () => {
    // black background logo
    // https://cdn.theplaylist.net/wp-content/uploads/2020/03/14192222/Netflix-Logo-750x400.jpg

    const [signIn, setSignIn] = useState(false);
    
    return (
    <div className='loginScreen'>
        <div className='loginScreen__background'>
            <img 
                className='loginScreen__logo'
                src="https://raw.githubusercontent.com/AntonioErdeljac/next-netflix-tutorial/master/public/images/logo.png"
                alt="" />
            <button 
                onClick={()=> setSignIn(true)}
                className='loginScreen__button'>Sign In
            </button>
           
           <div className='loginScreen__gradient'/>

            <div className='loginScreen__body'>
                {signIn? (<SignupScreen/>):(
                      <>
                      <h1>Unlimited films, TV programmes and
                       more.</h1>
                      <h2>Watch any where. Cancel at any time.</h2>
                      <h3>Ready to watch? Enter your email to create  or restart 
                          your membership.
                      </h3>
                      <div className='loginScreen__input'>
                          <form>
                              <input type="email" placeholder='Email Address' />
                                 <button 
                                 onClick={()=> setSignIn(true)}
                                 className='loginScreen__getStarted'>Get Started</button> 
                          </form>
                      </div>
                      </>
                )
                }
              
            </div>

        </div>
    </div>
  )
}

export default LoginScreen