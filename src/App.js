import React, { useEffect, Suspense, lazy } from "react";
import "./App.css";
import { connect } from "react-redux";
import {
  initThunk,
  toggleSidebarAC as toggleSidebar,
} from "./redux/appReducer";
import { Routes, Route } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import Initializer from "./components/common/Initializer/Initializer";
// Pages
const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainer"));
const MessagesContainer = lazy(() => import("./components/Messages/MessagesContainer"));
const UsersContainer = lazy(() => import("./components/Users/UsersContainer"));
const News = lazy(() => import("./components/News/News"));
const Settings = lazy(() => import("./components/Settings/Settings"));
const Music = lazy(() => import("./components/Music/Music"));
const LoginContainer = lazy(() => import("./components/Login/LoginContainer"));

function App(props) {
  useEffect(() => {
    props.initThunk();
  }, []);
  return props.isInit ? (
    <div className="App">
      <HeaderContainer />
      <SidebarContainer />
      <div
        className={props.sidebar ? "content" : "content opened"}
        onClick={() => props.toggleSidebar(false)}
      >
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
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
