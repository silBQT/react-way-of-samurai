import React from 'react'
import { connect } from 'react-redux';
import Header from './Header';
import { logout } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profile: state.auth.profile
})

export default connect(mapStateToProps, { logout })(HeaderContainer)