import { connect } from "react-redux";
import { setUsersAC } from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    items: state.usersPage.items,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (items) => {
      dispatch(setUsersAC(items));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;
