import { connect } from "react-redux";
import { compose } from "redux";
import { login } from "../../redux/auth-reducer";
import Login from "./Login";

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, { login })
)(Login)