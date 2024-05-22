import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" name="" id="" placeholder='Your Name'/>
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='password' name="" id="" />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account?
        <span>
         <br /> Login here
        </span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>Agree to our terms and conditions</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
