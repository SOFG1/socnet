import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import withId from "../../hoc/withId";
import { compose } from "redux";
import { Navigate } from "react-router-dom";
import { setUsersThunk as setUsers, followThunk as followUser, unfollowThunk as unfollowUser } from "../../redux/usersReducer";

class UsersContainer extends React.Component {
  componentDidMount() {
     this.props.urlId && this.props.urlId !== this.props.current && this.props.setUsers(this.props.urlId, this.props.defaultCount);
  }
  componentDidUpdate() {
    this.props.urlId && this.props.urlId !== this.props.current && this.props.setUsers(this.props.urlId, this.props.defaultCount)
  }
  render() {
    return this.props.urlId ? (
      <Users {...this.props} />
    ) : (
      !this.props.current ? <Navigate to={`/users/${this.props.defaultPage}`} /> : <Navigate to={`/users/${this.props.current}`} />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.users.users,
    pages: state.users.numberOfPages,
    isFetching: state.users.fetchingUsers,
    current: state.users.curentPage,
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
