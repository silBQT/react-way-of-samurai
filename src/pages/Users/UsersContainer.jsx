import { connect } from 'react-redux';
import { followActionCreator, setCurrentPageActionCreator, setTotalUsersCount, setUsersActionCreator, unfollowActionCreator } from '../../redux/users-reducer';
import axios from 'axios';
import React from 'react';
import Users from './Users';

class UsersContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
  }

  onClickChangeCurrentPage = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
    });
  };

  render() {
    return <Users totalUsersCount={this.props.totalUsersCount}
    currentPage={this.props.currentPage}
    pageSize={this.props.pageSize}
    users={this.props.users}
    follow={this.props.follow}
    unfollow={this.props.unfollow}
    onClickChangeCurrentPage={this.onClickChangeCurrentPage}/>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize
  }
};
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followActionCreator(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowActionCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageActionCreator(currentPage));
    },
    setTotalUsersCount: (totalUsersCount) => {
      dispatch(setTotalUsersCount(totalUsersCount));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

