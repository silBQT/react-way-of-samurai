import { connect } from 'react-redux';
import { setCurrentPage, setUserOnFollowing, requestUsers, follow, unfollow } from '../../redux/users-reducer';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { getCurrentPage, getIsFetching, getPageSize, getTotalUsersCount, getUsers, getUsersOnFollowing } from '../../redux/users-selectors';

class UsersContainer extends React.Component {

  componentDidMount() {
    let {currentPage, pageSize} = this.props
    this.props.requestUsers(currentPage, pageSize)
  }

  onClickChangeCurrentPage = (currentPage) => {
    let {pageSize} = this.props;
    this.props.requestUsers(currentPage, pageSize)
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
    users: getUsers(state),
    currentPage: getCurrentPage(state),
    totalUsersCount: getTotalUsersCount(state),
    pageSize: getPageSize(state),
    isFetching: getIsFetching(state),
    usersOnFollowing: getUsersOnFollowing(state)
  }
};

export default connect(mapStateToProps, {
  setCurrentPage,
  setUserOnFollowing,
  requestUsers,
  follow,
  unfollow
})(UsersContainer);

