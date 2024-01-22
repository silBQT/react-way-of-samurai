import { connect } from 'react-redux';
import { setCurrentPage, setUserOnFollowing, getUsers, follow, unfollow } from '../../redux/users-reducer';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onClickChangeCurrentPage = (currentPage) => {
    this.props.getUsers(currentPage, this.props.pageSize)
  };

  render() {
    return (
      <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
        currentPage={this.props.currentPage}
        pageSize={this.props.pageSize}
        users={this.props.users}
        onClickChangeCurrentPage={this.onClickChangeCurrentPage}
        usersOnFollowing={this.props.usersOnFollowing}
        setUserOnFollowing={this.props.setUserOnFollowing}
        follow={this.props.follow}
        unfollow={this.props.unfollow} />
        </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    isFetching: state.usersPage.isFetching,
    usersOnFollowing: state.usersPage.usersOnFollowing
  }
};

export default connect(mapStateToProps, {
  setCurrentPage,
  setUserOnFollowing,
  getUsers,
  follow,
  unfollow
})(UsersContainer);

