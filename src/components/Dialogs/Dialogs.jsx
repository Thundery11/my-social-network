import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {
  sendMessageActioCreator,
  onMessageChangeActionCreator,
} from "../../redux/messages-reducer.js";
const Dialogs = (props) => {
  let dialogElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let newMessageElement = React.createRef();
  let sendMessage = () => {
    props.dispatch(sendMessageActioCreator());
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    let action = onMessageChangeActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogElements}</div>
        <div className={s.messages}>{messagesElements}</div>
        <textarea
          ref={newMessageElement}
          onChange={onMessageChange}
          value={props.newMessageText}
        />
        <button onClick={sendMessage}> send message</button>
      </div>
    </div>
  );
};
export default Dialogs;
