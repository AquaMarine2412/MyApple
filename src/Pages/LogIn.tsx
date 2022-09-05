import React from 'react'
import { Link } from "react-router-dom"

const LogIn = () => {

  const FormData = {
    email: "",
    password: "",
    rememberMe: false
  }


  return (
    <div className='LogInFormSection'>
      <h2>Log in to MyApple</h2>

      <form className='LogInForm'>
        <input type="email" 
                name='email' 
                value={FormData.email}
                placeholder="email@example.com"
        />
        <input type="password" 
                name='password' 
                value={FormData.password} 
                placeholder="Password"
        />
        <button>{"⇨"}</button>
        <div className='checkbox'>
          <input type="checkbox" 
                  name="rememberMe" 
                  checked={FormData.rememberMe}
                  id="rememberMe"
          />
          <label htmlFor='rememberMe'>Remember Me</label>
         
        </div>
          <p className='signIn'>Don't have a myApple ID? <Link className='signInLink' to="/signin">Create yours now</Link> </p>
      </form>
    </div>
  )

}

export default LogIn