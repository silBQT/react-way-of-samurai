import { compose } from "redux";
import AddPostForm from "./AddPostForm";
import { reduxForm } from "redux-form";

export default compose(reduxForm({form: 'profileAddPostForm'}))(AddPostForm);