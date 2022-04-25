import React, { useEffect } from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { setUsersThunk as setUsers, followThunk as followUser, unfollowThunk as unfollowUser } from "../../redux/usersReducer";
import { getCurrent} from "../../redux/users-selectors";

const UsersContainer = (props)=> {
  const urlId = parseInt(useParams()['*'], 10);
  useEffect(()=> {
    urlId && urlId !== props.current && props.setUsers(urlId, props.defaultCount)
  })
    return urlId ? (
      <Users {...props} />
    ) : (
      !props.current ? <Navigate to={`/users/${props.defaultPage}`} /> : <Navigate to={`/users/${props.current}`} />
    );
  
}

let mapStateToProps = (state) => {
  return {
    users: state.users.users,
    numberOfPages: state.users.numberOfPages,
    isFetching: state.users.fetchingUsers,
    current: getCurrent(state),
    defaultPage: state.users.defaultPage,
    defaultCount: state.users.defaultCount,
    disabled: state.users.disabledFollow,
    isAuth: state.auth.isAuth,
  };
};


export default connect(mapStateToProps, {
    setUsers,
    followUser,
    unfollowUser
  })(UsersContainer);
