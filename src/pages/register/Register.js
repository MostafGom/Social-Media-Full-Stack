import axios from 'axios'
import React, { useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Register.css'

function Register() {
  const username = useRef()
  const email = useRef()
  const password = useRef()
  const passwordConfirm = useRef()
  const history = useHistory()
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (passwordConfirm.current.value !== password.current.value) {
      passwordConfirm.current.setCustomValidity('Passwords do not match')
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      }
      try {
        await axios.post('auth/register', user)
        history.push('/login')

      } catch (error) {
        console.log(error);
      }
    }

  }
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
          <form onSubmit={handleSubmit} className="loginBox">

            <input
              placeholder="username"
              required
              type='text'
              ref={username}
              className="loginInput"
            />

            <input
              placeholder="email"
              type='email'
              required
              ref={email}
              className="loginInput"
            />

            <input
              placeholder="password"
              type='password'
              required
              ref={password}
              className="loginInput"
              minLength='6'
            />

            <input
              placeholder="confirm password"
              type='password'
              required
              ref={passwordConfirm}
              className="loginInput"
            />

            <button className="loginButton" type='submit' >Sign Up</button>

            <Link to='/login' className='linklink'>
              <button className="loginRegisterButton" >Log Into Account</button>
            </Link>

          </form>
        </div>
        {/* end right */}
      </div>
    </div>
  )
}

export default Register
