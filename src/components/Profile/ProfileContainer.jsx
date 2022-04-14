import React from "react";
import s from "./Profile.module.scss";
import { connect } from "react-redux";
import Profile from "./Profile";
import Posts from "./Posts";
import withRedirect from "../../hoc/withAuth";
import { compose } from "redux";
import {
  setProfileThunk,
  changeStatusThunk,
  addPostThunk,
  likePostAC,
} from "../../redux/profileReducer";
import Preloader from "../common/Preloader/Preloader";
import withUserId from "../../hoc/withUserId";
import { Routes, Route } from "react-router-dom";

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props)
    this.updateProfile = this.updateProfile.bind(this);
  }
  componentDidMount() {
    this.updateProfile();
  }
  componentDidUpdate() {
    this.updateProfile();
  }
  // Check does profile need to update or not
  updateProfile() {
    if (!this.props.userId && !this.props.profile && this.props.myId) {
      this.props.setProfile(this.props.myId);
    }
    if (!this.props.userId && this.props.profile && this.props.profile.userId !== this.props.myId && this.props.myId) {
      this.props.setProfile(this.props.myId);
    }
    if (this.props.userId && !this.props.profile) {
      this.props.setProfile(this.props.userId);
    }
    if (this.props.userId && this.props.profile && this.props.profile.userId !== this.props.userId) {
      this.props.setProfile(this.props.userId);
    }
  }
  render() {
    return (
      <div className={s.Profile}>
        {this.props.isFetching && (
          <Preloader isFetching={this.props.isFetching} />
        )}
        {this.props.profile && (
          <Profile
            myId={this.props.myId}
            profile={this.props.profile}
            status={this.props.status}
            changeStatus={this.props.changeStatus}
          />
        )}



        <Routes>
          <Route path="/" element={        <Posts
          profile={this.props.profile}
          posts={this.props.posts}
          addPost={this.props.addPost}
          likePost={this.props.likePost}
        />}/>
        </Routes>

      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    status: state.profile.status,
    posts: state.profile.posts,
    myId: state.auth.profile.id,
    isFetching: state.profile.isFetching,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setProfile: (id) => {
      dispatch(setProfileThunk(id));
    },
    changeStatus: (status) => {
      dispatch(changeStatusThunk(status));
    },
    addPost: (form) => {
      dispatch(addPostThunk(form.post));
    },
    likePost: (id) => {
      dispatch(likePostAC(id));
    },
  };
};

export default compose(
  withRedirect,
  connect(mapStateToProps, mapDispatchToProps),
  withUserId
)(ProfileContainer);
