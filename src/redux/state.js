const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likescount: 0,
      };
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let newMessage = {
        id: 7,
        message: this._state.messagesPage.newMessageText,
      };
      this._state.messagesPage.messages.push(newMessage);
      this._state.messagesPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.messagesPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};
export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};
export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};
export const sendMessageActioCreator = () => {
  return {
    type: "SEND-MESSAGE",
  };
};
export const onMessageChangeActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
  };
};

export default store;
