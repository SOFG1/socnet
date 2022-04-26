import React, { useEffect } from "react";
import s from "./Profile.module.scss";
import { connect } from "react-redux";
import Profile from "./Profile";
import Posts from "./Posts";
import withRedirect from "../../hoc/withAuth";
import withErrorBoundary from "../../hoc/withErrorBoundary";
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
import { useParams } from "react-router-dom";

const ProfilContainer = (props)=> {
  const urlId = parseInt(useParams()['*'], 10);
  useEffect(()=> {
    let notSameProfile = !props.profile || props.profile.userId !== (urlId || props.myId)
    if (notSameProfile && (urlId || props.myId) ) {
      props.setProfile(urlId || props.myId);
    }
  }, [props.myId, urlId])
  return (
    <div className={s.Profile}>
      {props.isFetching && (
        <Preloader isFetching={props.isFetching} />
      )}
      {props.profile && (
        <Profile
          myId={props.myId}
          profile={props.profile}
          changeStatus={props.changeStatus}
          followUser={props.followUser}
          unfollowUser={props.unfollowUser}
          followDisabled={props.followDisabled}
        />
      )}

      {props.profile && !urlId && (
              <Posts
                posts={props.posts} // error here
                addPost={props.addPost}
                likePost={props.likePost}
              />
      )}
    </div>
  );
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
  withRedirect,
  connect(mapStateToProps, {setProfile, changeStatus, addPost, likePost, followUser, unfollowUser}),
  withErrorBoundary,
)(ProfilContainer);
