import React from 'react'
import { Link } from 'react-router-dom'
import "./Signin.css"
import Forget from './Forget'
import Signup from './Signup'
const Signin = () => {
  return (
    <div className='maindiv'>
      <div className="signin">
          <form className="form-signin">
              <h2>Login</h2>
              <label>Username<span>*</span></label>
              <br />
              <br />
              <input type="text" required />
              <br/>
              <label>Password<span>*</span></label>
              <br />
              <br />
              <input type="password" required />
              <br />
              <Link to="/forgetpassword" className='p1'>Forgot password?</Link>
              <Link to="/signup" className='p2'>New User?</Link>
              <br />
              <br />
              <Link to="/home" className='p3'>Submit</Link>
          </form>
      </div>
    </div>
  )
}

export default Signin