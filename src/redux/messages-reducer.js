const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const messagesReducer = (state, action) => {
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
