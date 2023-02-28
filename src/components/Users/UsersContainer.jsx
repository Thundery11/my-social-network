import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    items: state.usersPage.items,
    follow: state.usersPage.items.follow,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (items) => {
      dispatch(setUsersAC(items));
    },
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;
