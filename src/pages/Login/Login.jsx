import React from 'react'
import styles from './Login.module.scss'
import LoginFormRedux from './LoginForm/LoginFormRedux'
import { Navigate } from 'react-router-dom'

const Login = (props) => {
  const onSubmit = (formData) => {
    let {login, password, rememberMe} = formData
    props.login(login, password, rememberMe);
  }
  
  if (props.isAuth) {
    return <Navigate to="/profile" />
  }
  return (
    <div>
      <h2>login</h2>
      <LoginFormRedux onSubmit={onSubmit} />
    </div>
  )
}

export default Login