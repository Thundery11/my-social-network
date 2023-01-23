import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { Routes } from "react-router-dom";
const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.sidebar} />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/profile/*"
              element={<Profile store={props.store} />}
            />{" "}
            <Route
              path="/dialogs/*"
              element={
                <Dialogs
                  store={props.store}
                  state={props.state.messagesPage}
                  messages={props.state.messagesPage}
                  newMessageText={props.state.messagesPage.newMessageText}
                  dispatch={props.dispatch}
                />
              }
            />
            <Route path="/music/*" element={<Music />} />
            <Route path="/news/*" element={<News />} />
            <Route path="/settings/*" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
//22
export default App;
