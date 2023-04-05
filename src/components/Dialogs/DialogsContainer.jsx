import Dialogs from "./Dialogs";
import {
  sendMessageActioCreator,
  onMessageChangeActionCreator,
} from "../../redux/messages-reducer.js";
import { connect } from "react-redux";
import { compose } from "redux";
import { WithAuthRedirect } from "../hoc/WithAuthRedirect";

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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(Dialogs);
