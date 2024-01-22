import React from 'react'
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData, setProfileData } from '../../redux/auth-reducer';
import { authAPI, profileAPI } from '../../api/api';

class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.me().then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data
                this.props.setAuthUserData(id, email, login)
                profileAPI.getUserProfile(id).then(data => {
                    this.props.setProfileData(data);
                });
            }
        });
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

export default connect(mapStateToProps, { setAuthUserData, setProfileData })(HeaderContainer)