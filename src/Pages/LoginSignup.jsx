import React, { useContext, useState } from 'react'
import './CSS/LoginSignup.css'
import { ShopContext } from '../Context/ShopContext';

const LoginSignup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [message, setMessage] = useState('')

  const { setUser } = useContext(ShopContext);

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setFormData({
      ...formData, 
      [name] : value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    // Retrieve existing users from localStorage  
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existingUsers.some(user => user.email === formData.email)
    
    if (userExists) {
      setMessage(`User already signed up with email: ${formData.email}`);
    } else {
      existingUsers.push(formData);
      localStorage.setItem('users', JSON.stringify(existingUsers));
      setUser(formData); // Set the user in context
      localStorage.setItem('currentUser', JSON.stringify(formData));
      setMessage(`Sign up successfully, welcome ${formData.username}!`);
      // setMessage(`Sign up successfully, welcome ${formData.username}!`);
    }
    setIsSubmitted(true);
  }


  return (
    <div className='loginsignup'>
      {isSubmitted ? (
          <div className="success-message">
          {message}
        </div>
        ) : (
      <div className="loginsignup-container">
        
          <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <div className="loginsignup-fields">
              <input
                type="text"
                name="username"
                placeholder='Your Name'
                value={formData.username}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder='Email Address'
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder='Password'
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="loginsignup-agree">
              <input type="checkbox" required />
              <p>Agree to our terms and conditions</p>
            </div>
            <p className='loginsignup-login'>Already have an account?
              <span><br /> Login here</span>
            </p>
            <button type="submit">Continue</button>
            
           
          </form>
      </div>
        )}
    </div>
  );
};

export default LoginSignup;
