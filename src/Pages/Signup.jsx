import React from 'react'
import { Link } from 'react-router-dom'
import './Signup.css';
const Signup = () => {
  return (
    <div className="up1">
      <div className='maind'>
      <div className="up">
          <form className="form-signin">
              <h2>Sign Up</h2>
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
              <br />
              <label>Confirm Password<span>*</span></label>
              <br />
              <br />
              <input type="password" required />
              <br />
              <br />
               <Link to="/signin" className='p5'>Submit</Link> 
          </form>
      </div>
    </div>
      </div>
  )
}

export default Signup