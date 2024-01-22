import React from 'react'
import { connect } from 'react-redux';
import Profile from './Profile'
import { setUserProfile } from '../../redux/profile-reducer';
import withRouter from '../../withRouter';
import { profileAPI } from '../../api/api';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) userId = 2;
        profileAPI.getUserProfile(userId).then(data => {
            this.props.setUserProfile(data)
        });
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer))