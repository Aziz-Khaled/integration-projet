import React from 'react'
import './Login.css'

function Login() {
  return (
    <>
    <title>Slide Navbar</title>
    <link rel="stylesheet" type="text/css" href="slide navbar style.css" />
    <link
      href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap"
      rel="stylesheet"
    />
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />
      <div className="signup">
        <form>
          <label htmlFor="chk" aria-hidden="true">
            Sign up
          </label>
          <input type="email" name="email" placeholder="Email" required="" />
         
          <input type="password" name="pswd" placeholder="Password" required="" />
          <button>Sign up</button>
        </form>
      </div>
    </div>
  </>
  
  )
}

export default Login