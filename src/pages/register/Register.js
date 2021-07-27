import React from 'react'
import './Register.css'

function Register() {
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

            <input placeholder="username" className="loginInput" />
            <input placeholder="email" className="loginInput" />
            <input placeholder="password" className="loginInput" />
            <input placeholder="confirm password" className="loginInput" />
            <button className="loginButton" >Sign Up</button>
            <button className="loginRegisterButton" >Log Into Account</button>

          </div>
        </div>
        {/* end right */}
      </div>
    </div>
  )
}

export default Register
