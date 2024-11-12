import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className="containerr">
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />
      <div className="signup">
        <form>
          <label htmlFor="chk" aria-hidden="true" className ="labelLogin">
            Sign in
          </label>
          <input type="email" name="email" placeholder="Email" required="" />
          <input type="password" name="pswd" placeholder="Password" required="" />
          <button className = "btn-login" >Confirm</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Login