import { connect } from "react-redux";
import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from "../../../redux/profile-reducer.js";
import MyPosts from "./MyPosts";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect.jsx";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    post: state.profilePage.post,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(MyPosts);
