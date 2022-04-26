import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { connect } from "react-redux";
import { setFriendsThunk as setFriends } from "../../redux/usersReducer";
import { toggleSidebarAC as toggleSidebar } from "../../redux/appReducer";

const SidebarContainer = (props) => {
  useEffect(() => {
    if (props.isAuth) props.setFriends();
  }, [props.isAuth]);
  return (
    <Sidebar
      toggleSidebar={props.toggleSidebar}
      sideBar={props.sideBar}
      isAuth={props.isAuth}
      friends={props.friends}
      isFetching={props.isFetching}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    friends: state.users.friends,
    isFetching: state.users.fetchingFriends,
    sideBar: state.app.sidebarOpened,
  };
};

export default connect(mapStateToProps, { setFriends, toggleSidebar })(
  SidebarContainer
);
