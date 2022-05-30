import React, { useEffect, useState } from "react";
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
  updateAvatarThunk as updateAvatar,
  editProfileThunk as editProfile,
  setProfileInfoAC as setProfileInfo,
} from "../../redux/profileReducer.ts";
import Preloader from "../common/Preloader/Preloader.tsx";
import { useParams } from "react-router-dom";
import ErrorBoundary from "../common/ErrorBoundary/ErrorBoundary.tsx";

const ProfilContainer = (props) => {
  const urlId = parseInt(useParams()["*"], 10);
  useEffect(() => {
    let notSameProfile =
      !props.profile || props.profile.userId !== (urlId || props.myId);
    if (notSameProfile && (urlId || props.myId)) {
      props.setProfile(urlId || props.myId);
    }
  }, [props.myId, urlId]);
  // Avatar input
  const [avatarLoading, setLoading] = useState(false);
  const [avatarError, setError] = useState(false);
  const updateAvatar = async (image) => {
    if (image) {
      setLoading(true);
      const code = await props.updateAvatar(image);
      setLoading(false);
      if (code !== 0) setError(true);
      if (code === 0) setError(false);
    }
  };
  return (
    <div className={s.Profile}>
      {props.isFetching && <Preloader isFetching={props.isFetching} />}
      {props.profile && (
        <Profile
          setProfileInfo={props.setProfileInfo}
          editProfile={props.editProfile}
          avatarLoading={avatarLoading}
          avatarError={avatarError}
          owner={!urlId}
          myId={props.myId}
          profile={props.profile}
          changeStatus={props.changeStatus}
          followUser={props.followUser}
          unfollowUser={props.unfollowUser}
          followDisabled={props.followDisabled}
          updateAvatar={updateAvatar}
        />
      )}

      {props.profile && !urlId && (
        <ErrorBoundary>
          <Posts
            posts={props.posts}
            addPost={props.addPost}
            likePost={props.likePost}
          />
        </ErrorBoundary>
      )}
    </div>
  );
};

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
  connect(mapStateToProps, {
    setProfileInfo,
    editProfile,
    setProfile,
    changeStatus,
    addPost,
    likePost,
    followUser,
    unfollowUser,
    updateAvatar,
  })
)(ProfilContainer);
