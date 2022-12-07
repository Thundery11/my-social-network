let state = {
  profilePage: {
    postData: [
      { id: 1, message: "Hi, how are u?", likescount: 12 },
      { id: 2, message: "It`s my first post", likescount: 4 },
    ],
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
    sidebarFriends: [{ name: "Egor" }, { name: "Nazar" }, { name: "Dima" }],
  },
};
export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likescount: 0,
  };
  state.profilePage.postData.push(newPost);
};

export default state;
