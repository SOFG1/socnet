import React from "react";
import s from "./Profile.module.scss";
import { connect } from "react-redux";
import Profile from "./Profile";
import Posts from "./Posts";
import withRedirect from "../../hoc/withAuth";
import { compose } from "redux";
import {
  setProfileThunk as setProfile,
  changeStatusThunk as changeStatus,
  addPostThunk as addPost,
  likePostAC as likePost,
  followUserThunk as followUser,
  unfollowUserThunk as unfollowUser,
} from "../../redux/profileReducer";
import Preloader from "../common/Preloader/Preloader";
import withId from "../../hoc/withId";

class ProfileContainer extends React.Component {
  componentDidMount() {
    if (!this.props.urlId && !this.props.profile && this.props.myId) {
      this.props.setProfile(this.props.myId);
    }
    if (
      !this.props.urlId &&
      this.props.profile &&
      this.props.profile.userId !== this.props.myId &&
      this.props.myId
    ) {
      this.props.setProfile(this.props.myId);
    }
    if (this.props.urlId && !this.props.profile && this.props.isAuth) {
      this.props.setProfile(this.props.urlId);
    }
    if (
      this.props.urlId &&
      this.props.profile &&
      this.props.profile.userId !== this.props.urlId
    ) {
      this.props.setProfile(this.props.urlId);
    }
    if (!this.props.isAuth && this.props.urlId && !this.props.profile) {
      this.props.setProfile(this.props.urlId);
    }
  }
  componentDidUpdate() {
    if (!this.props.urlId && !this.props.profile && this.props.myId) {
      this.props.setProfile(this.props.myId);
    }
    if (
      !this.props.urlId &&
      this.props.profile &&
      this.props.profile.userId !== this.props.myId &&
      this.props.myId
    ) {
      this.props.setProfile(this.props.myId);
    }
    if (this.props.urlId && !this.props.profile && this.props.isAuth) {
      this.props.setProfile(this.props.urlId);
    }
    if (
      this.props.urlId &&
      this.props.profile &&
      this.props.profile.userId !== this.props.urlId
    ) {
      this.props.setProfile(this.props.urlId);
    }
    if (this.props.isAuth === false && this.props.urlId && !this.props.profile) {
      this.props.setProfile(this.props.urlId);
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
            changeStatus={this.props.changeStatus}
            followUser={this.props.followUser}
            unfollowUser={this.props.unfollowUser}
            followDisabled={this.props.followDisabled}
          />
        )}

        {this.props.profile && !this.props.urlId && (
                <Posts
                  posts={this.props.posts}
                  addPost={this.props.addPost}
                  likePost={this.props.likePost}
                />
        )}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    followDisabled: state.profile.followDisabled,
    posts: state.profile.posts,
    myId: state.auth.profile.id,
    isFetching: state.profile.isFetching,
  };
};




export default compose(
  withId,
  withRedirect,
  connect(mapStateToProps, {setProfile, changeStatus, addPost, likePost, followUser, unfollowUser}),
)(ProfileContainer);
