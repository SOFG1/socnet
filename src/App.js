import React, { useEffect, Suspense, lazy } from "react";
import "./App.css";
import { connect } from "react-redux";
import {
  initThunk,
  toggleSidebarAC as toggleSidebar,
  toggleNetworkErrorAC as toggleNetworkError,
} from "./redux/appReducer.ts";
import { Routes, Route, Navigate } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import Initializer from "./components/common/Initializer/Initializer";
import Preloader from "./components/common/Preloader/Preloader";
import NetworkError from "./components/common/NetworkError/NetworkError";
import ErrorBoundary from "./components/common/ErrorBoundary/ErrorBoundary";
// Pages
const ProfileContainer = lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const MessagesContainer = lazy(() =>
  import("./components/Messages/MessagesContainer")
);
const UsersContainer = lazy(() => import("./components/Users/UsersContainer"));
const News = lazy(() => import("./components/News/News"));
const Music = lazy(() => import("./components/Music/Music"));
const LoginContainer = lazy(() => import("./components/Login/LoginContainer"));
const NotFound404 = lazy(() => import("./components/NotFound404/NotFound404"));

function App(props) {
  useEffect(() => {
    //Catch all unhandled promises
    window.addEventListener("offline", () => props.toggleNetworkError(true));
    window.addEventListener("unhandledrejection", () =>
      props.toggleNetworkError(true)
    );
    window.addEventListener("online", () => props.toggleNetworkError(false));
    //Initialize app
    props.initThunk();
    return () => {
      window.removeEventListener("offline", () =>
        props.toggleNetworkError(true)
      );
      window.removeEventListener("online", () =>
        props.toggleNetworkError(false)
      );
      window.removeEventListener("unhandledrejection", () =>
        props.toggleNetworkError(true)
      );
    };
  }, []);
  return props.isInit ? (
    <div className="App">
      <NetworkError hasError={props.networkError} />
      <HeaderContainer />
      <SidebarContainer />
      <div className="content" onClick={() => props.toggleSidebar(false)}>
        <ErrorBoundary>
        <Suspense fallback={<Preloader isFetching={true} />}>
          <Routes>
            <Route path="/" element={<Navigate to="/profile" />} />
            <Route path="/profile/*" element={<ProfileContainer />} />
            <Route path="/messages/*" element={<MessagesContainer />} />
            <Route path="/users/*" element={<UsersContainer />} />
            <Route path="/news/*" element={<News />} />
            <Route path="/music/*" element={<Music />} />
            <Route path="/login/*" element={<LoginContainer />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  ) : (
    <>
      <Initializer />
      <NetworkError hasError={props.networkError} />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    authData: state.auth,
    isInit: state.app.isInit,
    networkError: state.app.networkError,
  };
};

export default connect(mapStateToProps, {
  initThunk,
  toggleSidebar,
  toggleNetworkError,
})(App);
