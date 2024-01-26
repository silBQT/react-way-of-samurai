import React from 'react'
import styles from './Login.module.scss'
import LoginFormRedux from './LoginForm/LoginFormRedux'

const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  }
  return (
    <div>
      <h2>login</h2>
      <LoginFormRedux onSubmit={onSubmit} />
    </div>
  )
}

export default Login