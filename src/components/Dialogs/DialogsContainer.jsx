import React from "react";
import Dialogs from "./Dialogs";
import {
  sendMessageActioCreator,
  onMessageChangeActionCreator,
} from "../../redux/messages-reducer.js";

const DialogsContainer = (props) => {
  let state = props.store.getState();
  let sendMessage = () => {
    props.store.dispatch(sendMessageActioCreator());
  };

  let onMessageChange = (text) => {
    let action = onMessageChangeActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <Dialogs
      state={state.messagesPage}
      messagesElements={state.messagesPage.messages}
      sendMessage={sendMessage}
      onMessageChange={onMessageChange}
      newMessageText={state.messagesPage.newMessageText}
    />
  );
};
export default DialogsContainer;
