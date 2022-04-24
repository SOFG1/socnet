import "./App.css";
import { Routes, Route } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import LoginContainer from "./components/Login/LoginContainer";
import { useEffect } from "react";
import { connect } from "react-redux";
import { initThunk, toggleSidebarAC as toggleSidebar } from "./redux/appReducer";
import Initializer from "./components/common/Initializer/Initializer";

function App(props) {
  useEffect(() => {
    props.initThunk();
  }, []);
  return props.isInit ? (
    <div className="App">
      <HeaderContainer />
      <SidebarContainer />
      <div className={props.sidebar ? "content" : "content opened"} onClick={()=> props.toggleSidebar(false)}>
        <Routes>
          <Route path="/" element={<ProfileContainer />} />
          <Route path="/profile/*" element={<ProfileContainer />} />
          <Route path="/messages/*" element={<MessagesContainer />} />
          <Route path="/users/*" element={<UsersContainer />} />
          <Route path="/news/*" element={<News />} />
          <Route path="/music/*" element={<Music />} />
          <Route path="/settings/*" element={<Settings />} />
          <Route path="/login/*" element={<LoginContainer />} />
        </Routes>
      </div>
    </div>
  ) : (
    <Initializer />
  );
}

const mapStateToProps = (state) => {
  return {
    authData: state.auth,
    isInit: state.app.isInit,
    sidebar: state.app.sidebarOpened,
  };
};

export default connect(mapStateToProps, { initThunk, toggleSidebar })(App);
