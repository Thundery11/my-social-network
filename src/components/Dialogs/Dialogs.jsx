import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import { Navigate } from "react-router-dom";
const Dialogs = (props) => {
  let dialogElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let newMessageElement = React.createRef();
  let sendMessage = () => {
    props.sendMessage();
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.onMessageChange(text);
  };
  if (!props.isAuth) {
    return <Navigate to={"/login"} />;
  }
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
