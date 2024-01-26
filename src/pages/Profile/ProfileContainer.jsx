import React from 'react'
import { connect } from 'react-redux';
import Profile from './Profile'
import { getUserProfile, getUserStatus, updateUserStatus } from '../../redux/profile-reducer';
import withRouter from '../../withRouter';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) this.props.history.push("/login");
        };
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.userId
})

export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus } ),
    withRouter,
    withAuthRedirect
)(ProfileContainer)