import { reduxForm } from "redux-form";
import AddMessageForm from "./AddMessageForm";

export default reduxForm({form: 'dialogsAddMessageForm'})(AddMessageForm);