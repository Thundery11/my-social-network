import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollow,
} from "../../redux/users-reducer";

import React from "react";
import Users from "./Users";
import Preloader from "../common/preloader/preloader";
import { UsersAPI } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(
      (data) => {
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
        this.props.toggleIsFetching(false);
      }
    );
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);

    UsersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.setUsers(data.items);
      this.props.toggleIsFetching(false);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching === true ? <Preloader /> : null}
        <Users {...this.props} onPageChanged={this.onPageChanged} />;
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    items: state.usersPage.items,
    follow: state.usersPage.items.follow,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

export default connect(mapStateToProps, {
  setUsers,
  follow,
  unfollow,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersContainer);
