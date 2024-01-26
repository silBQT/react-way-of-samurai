import React from 'react'
import styles from './Login.module.scss'
import LoginFormRedux from './LoginForm/LoginFormRedux'
import { Navigate } from 'react-router-dom'

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.login, formData.password, formData.rememberMe);
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