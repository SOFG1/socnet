import React, { useEffect } from "react";
import Users from "./Users.tsx";
import { connect } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import {
  setUsersThunk as setUsers,
  followThunk as followUser,
  unfollowThunk as unfollowUser,
} from "../../redux/usersReducer.ts";
import { getCurrent } from "../../redux/users-selectors";
import { UserType } from "../../types/types";

type PropsType = {
  current: null | number;
  defaultCount: number;
  defaultPage: number;
  disabled: number[] | [];
  followUser: () => void;
  isAuth: boolean;
  isFetching: boolean;
  numberOfPages: number;
  setUsers: (urlId:number, defaultCount:number) => void;
  unfollowUser: () => void;
  users: UserType[] | []
};

const UsersContainer = (props:PropsType) => {
  console.log(props);
  let changePage = useNavigate();
  const urlId = parseInt(useParams()["*"], 10);
  useEffect(() => {
    urlId &&
      urlId !== props.current &&
      props.setUsers(urlId, props.defaultCount);
  });
  return urlId ? (
    <Users {...props} toPage={(page) => changePage(`${page}`)} />
  ) : !props.current ? (
    <Navigate to={`/users/${props.defaultPage}`} />
  ) : (
    <Navigate to={`/users/${props.current}`} />
  );
};

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
  unfollowUser,
})(UsersContainer);
