import React from 'react'
import styles from './Login.module.scss'
import LoginReduxForm from './LoginReduxForm'

const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  }
  return (
    <div>
      <h2>login</h2>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login