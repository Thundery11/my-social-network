import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "Hi, how are u?", likescount: 12 },
        { id: 2, message: "It`s my first post", likescount: 4 },
      ],
      newPostText: "Hello world",
    },
    messagesPage: {
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "I`m fine, and U?" },
        { id: 4, message: "I`m too" },
        { id: 5, message: "Blala" },
        { id: 6, message: "goodbye" },
      ],
      newMessageText: "Hi everyone",
      dialogs: [
        { id: 1, name: "Katya" },
        { id: 2, name: "Sasha" },
        { id: 3, name: "Dasha" },
        { id: 4, name: "Denis" },
        { id: 5, name: "Jenya" },
        { id: 6, name: "Yulia" },
      ],
    },
    sidebar: {
      sidebarFriends: [{ name: "Vlad" }, { name: "Nazar" }, { name: "Dima" }],
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state changed");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(
      this._state.messagesPage,
      action
    );
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

export default store;
