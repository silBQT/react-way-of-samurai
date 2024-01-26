import React from 'react'
import { connect } from 'react-redux';
import Header from './Header';
import { getAuthUserData, logout } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profile: state.auth.profile
})

export default connect(mapStateToProps, { getAuthUserData, logout })(HeaderContainer)