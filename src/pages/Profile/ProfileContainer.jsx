import React from 'react'
import { connect } from 'react-redux';
import { Navigate } from "react-router-dom";
import Profile from './Profile'
import { getUserProfile } from '../../redux/profile-reducer';
import withRouter from '../../withRouter';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) userId = 2;
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)