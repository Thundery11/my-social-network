const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialstate = {
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
};
const messagesReducer = (state = initialstate, action) => {
  if (action.type === SEND_MESSAGE) {
    let newMessage = {
      id: 7,
      message: state.newMessageText,
    };
    state.messages.push(newMessage);
    state.newMessageText = "";
  } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    state.newMessageText = action.newText;
  }
  return state;
};
export const sendMessageActioCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};
export const onMessageChangeActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
  };
};

export default messagesReducer;
