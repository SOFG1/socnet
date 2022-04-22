import React, { useEffect } from "react";
import Users from "./Users";
import { connect } from "react-redux";
import withId from "../../hoc/withId";
import { compose } from "redux";
import { Navigate } from "react-router-dom";
import { setUsersThunk as setUsers, followThunk as followUser, unfollowThunk as unfollowUser } from "../../redux/usersReducer";
import { getCurrent, getPages } from "../../utilites/selectors";

const UsersContainer = (props)=> {
  useEffect(()=> {
    props.urlId && props.urlId !== props.current && props.setUsers(props.urlId, props.defaultCount)
  })
    return props.urlId ? (
      <Users {...props} />
    ) : (
      !props.current ? <Navigate to={`/users/${props.defaultPage}`} /> : <Navigate to={`/users/${props.current}`} />
    );
  
}

let mapStateToProps = (state) => {
  return {
    users: state.users.users,
    pages: getPages(state),
    numberOfPages: state.users.numberOfPages,
    isFetching: state.users.fetchingUsers,
    current: getCurrent(state),
    defaultPage: state.users.defaultPage,
    defaultCount: state.users.defaultCount,
    disabled: state.users.disabledFollow,
    isAuth: state.auth.isAuth,
  };
};


export default compose(
  connect(mapStateToProps, {
    setUsers,
    followUser,
    unfollowUser
  }),
  withId
)(UsersContainer);
