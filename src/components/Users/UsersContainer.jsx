import { connect } from "react-redux";
import {
  follow,
  setUsers,
  unfollow,
  GetUsers,
} from "../../redux/users-reducer";

import React from "react";
import Users from "./Users";
import Preloader from "../common/preloader/preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.GetUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (pageNumber) => {
    this.props.GetUsers(pageNumber, this.props.pageSize);
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
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  setUsers,
  follow,
  unfollow,
  GetUsers,
})(UsersContainer);
