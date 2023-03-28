import React from "react";
import Dialogs from "./Dialogs";
import {
  sendMessageActioCreator,
  onMessageChangeActionCreator,
} from "../../redux/messages-reducer.js";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    state: state.messagesPage,
    newMessageText: state.messagesPage.newMessageText,
    isAuth: state.auth.isAuth,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActioCreator());
    },
    onMessageChange: (text) => {
      dispatch(onMessageChangeActionCreator(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
