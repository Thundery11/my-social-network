let renderEntireTree = () => {
  console.log("state changed");
};
let state = {
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
};
export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likescount: 0,
  };
  state.profilePage.postData.push(newPost);
  state.profilePage.newPostText = "";
  renderEntireTree(state);
};
export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
};

export const sendMessage = () => {
  let newMessage = {
    id: 7,
    message: state.messagesPage.newMessageText,
  };
  state.messagesPage.messages.push(newMessage);
  state.messagesPage.newMessageText = "";
  renderEntireTree(state);
};

export const updateNewMessageText = (newText) => {
  state.messagesPage.newMessageText = newText;
  renderEntireTree(state);
};
export const subscribe = (observer) => {
  renderEntireTree = observer;
};

export default state;
