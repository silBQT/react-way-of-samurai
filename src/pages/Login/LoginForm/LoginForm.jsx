import React from 'react'
import { Field } from 'redux-form';
import { Input } from '../../common/FormsControls/FormsControls';
import { required } from '../../../utils/validators/validators';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Input} validate={[required]} name={'login'} placeholder={'Login'} />
      </div>
      <div>
        <Field component={Input} validate={[required]} name={'password'} type={'password'} placeholder={'Password'} />
      </div>
      <div>
        <Field component={Input} validate={[]} name={'rememberMe'} type={'checkbox'} />Remember me
      </div>
      <div>
        <div>
          {props.error}
        </div>
        <button>Login</button>
      </div>
    </form>
  )
}

export default LoginForm