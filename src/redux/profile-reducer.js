import { ProfileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const GET_PROFILE_STATUS = "GET_PROFILE_STATUS";
let initialstate = {
  post: [
    { id: 1, message: "Hi, how are u?", likescount: 12 },
    { id: 2, message: "It`s my first post", likescount: 4 },
  ],
  newPostText: "Hello world",
  profile: null,
  status: "",
};

let profileReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likescount: 0,
      };
      let stateCopy = { ...state };
      stateCopy.post = [...state.post];
      stateCopy.post.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case GET_PROFILE_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};
export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};
export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};
export const getProfileStatus = (status) => {
  return {
    type: GET_PROFILE_STATUS,
    status,
  };
};
export const setProfileStatus = (userId) => (dispatch) => {
  ProfileAPI.getProfileStatus(userId).then((data) => {
    dispatch(getProfileStatus(data));
  });
};
export const updateProfileStatus = (status) => (dispatch) => {
  ProfileAPI.updateProfileStatus(status).then((data) => {
    if (data.resultCode === 0) {
      dispatch(getProfileStatus(data));
    }
  });
};

export const setUsers = (userId) => (dispatch) => {
  ProfileAPI.getUserProfile(userId).then((data) => {
    dispatch(setUserProfile(data));
  });
};
export default profileReducer;
