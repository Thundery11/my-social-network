import React from "react";
import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from "../../../redux/profile-reducer.js";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState();
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };
  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };
  return (
    <MyPosts
      addPost={addPost}
      updateNewPostText={onPostChange}
      postData={state.profilePage.postData}
      newPostText={state.profilePage.newPostText}
    />
  );
};
//kkkk
export default MyPostsContainer;
