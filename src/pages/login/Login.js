import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className="login" >
      <div className="loginWrapper">
        {/* start left */}
        <div className="loginLeft">
          <h3 className="loginLogo">Fakebook Clone</h3>
          <span className="loginDesc">
            Connect with friends and build new relations
            with people all over the world on this Fake Clone
          </span>
        </div>
        {/* end left */}

        {/* start right */}
        <div className="loginRight">
          <div className="loginBox">

            <input placeholder="email" className="loginInput" />
            <input placeholder="password" className="loginInput" />
            <button className="loginButton" >Log In</button>
            <span className="loginForgot" >Forgot Password</span>
            <button className="loginRegisterButton" >Not a User? Create an account</button>

          </div>
        </div>
        {/* end right */}
      </div>
    </div>
  )
}

export default Login
