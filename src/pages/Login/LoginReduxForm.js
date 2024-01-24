import { compose } from "redux";
import LoginForm from "./LoginForm";
import { reduxForm } from "redux-form";

export default compose(reduxForm({form: 'login'}))(LoginForm);