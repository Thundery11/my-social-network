import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
let renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        store={store}
        state={state}
        dispatch={store.dispatch.bind(store)}

        // sendMessage={store.sendMessage.bind(store)}
        // updateNewMessageText={store.updateNewMessageText.bind(store)}
      />
    </React.StrictMode>
  );
};

renderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
