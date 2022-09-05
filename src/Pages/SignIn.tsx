import React from 'react'

const SignIn = () => {

  const FormData = {
    fName: "",
    lName: "",
    email: "",
    password: "",
    passwordConfirm: ""
  }


  return (
    <div className='SignInFormSection'>
      <h1>Create Your MyApple ID</h1>

      <p>Just... just sign in. </p>

      <form className='SignInForm'>

        <input type="text" 
                name='fName' 
                value={FormData.fName} 
                placeholder="First name"
        />
        <input type="text" 
               name='lName' 
               value={FormData.lName} 
               placeholder="Last name"
        />
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
        <input type="password" 
                name='passwordConfirm' 
                value={FormData.passwordConfirm} 
                placeholder="Confirm password"
        />

        <button>Sign In</button>
      </form>
    </div>
    


  )
}

export default SignIn