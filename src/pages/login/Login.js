import React, { useContext, useRef } from 'react'
import './Login.css'
import { loginCall } from '../../apiCalls'
import { AuthContext } from '../../context/AuthContext'
import { CircularProgress } from '@material-ui/core'
import { Link } from 'react-router-dom'

function Login() {
  const email = useRef()
  const password = useRef()
  const { user, isFetching, error, dispatch } = useContext(AuthContext)

  const handleSubmit = (event) => {
    event.preventDefault()
    loginCall({
      email: email.current.value,
      password: password.current.value
    }, dispatch);
  }
  console.log(user);

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

            <input placeholder="email" type='email'
              required
              className="loginInput"
              ref={email} />

            <input placeholder="password" type='password'
              required
              className="loginInput"
              minLength='6'
              ref={password} />

            <button
              type='submit'
              className="loginButton"
              disabled={isFetching}
            >

              {isFetching
                ? <CircularProgress color="primary" size='20px' />
                : "Log In"}
            </button>

            <span className="loginForgot" >Forgot Password</span>

            <Link to='/register' className='linklink' >
              <button
                className="loginRegisterButton"
                disabled={isFetching}
              >
                {isFetching
                  ? <CircularProgress color="primary" size='20px' />
                  : "Not a User? Create an account"}
              </button>
            </Link>

          </form>
        </div>
        {/* end right */}
      </div>
    </div>
  )
}

export default Login
