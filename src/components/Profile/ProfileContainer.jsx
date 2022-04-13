import React from "react";
import s from "./Profile.module.scss";
import { connect } from "react-redux";
import Profile from "./Profile";
import Posts from "./Posts";
import withRedirect from "../../hoc/withAuth";
import { compose } from "redux";
import { setProfileThunk, changeStatusThunk, addPostThunk, likePostAC } from "../../redux/profileReducer";
import Preloader from '../common/Preloader/Preloader';

class ProfileContainer extends React.Component {
  componentDidMount() {
    if (!this.props.profile && this.props.myId)
      this.props.setProfile(this.props.myId);
  }
  componentDidUpdate() {
    if (!this.props.profile && this.props.myId)
      this.props.setProfile(this.props.myId);
  }
  render() {
    return (
      <div className={s.Profile}>
        {this.props.isFetching && <Preloader isFetching={this.props.isFetching} />}
        {this.props.profile && <Profile profile={this.props.profile} status={this.props.status} changeStatus={this.props.changeStatus}/>}
        <Posts profile={this.props.profile} posts={this.props.posts} addPost={this.props.addPost} likePost={this.props.likePost} />
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
    changeStatus: (status)=> {
      dispatch(changeStatusThunk(status))
    },
    addPost: (form)=> {
      dispatch(addPostThunk(form.post))
    },
    likePost: (id)=> {
      dispatch(likePostAC(id))
    }
  };
};

export default compose(
  withRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(ProfileContainer);
