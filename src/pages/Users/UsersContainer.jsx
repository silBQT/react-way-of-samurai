import { connect } from 'react-redux';
import { follow, setCurrentPage, setIsFetching, setTotalUsersCount, setUsers, unfollow } from '../../redux/users-reducer';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.setIsFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.setIsFetching(false)
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    });
  }

  onClickChangeCurrentPage = (currentPage) => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(currentPage);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.setIsFetching(false);
      this.props.setUsers(data.items)
    });
  };

  render() {
    return (
      <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
        currentPage={this.props.currentPage}
        pageSize={this.props.pageSize}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        onClickChangeCurrentPage={this.onClickChangeCurrentPage} />
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
    isFetching: state.usersPage.isFetching
  }
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching
})(UsersContainer);

