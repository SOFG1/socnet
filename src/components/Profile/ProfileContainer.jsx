import React from "react";
import s from './Profile.module.scss'
import { connect } from "react-redux";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  render() {
    return (
      <div className={s.Profile}>
        <Profile profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    posts: state.profile.posts,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
