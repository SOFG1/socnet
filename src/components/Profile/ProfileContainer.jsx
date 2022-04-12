import React from "react";
import s from "./Profile.module.scss";
import { connect } from "react-redux";
import Profile from "./Profile";
import withRedirect from "../../hoc/withAuth";
import { compose } from "redux";
import { setProfileThunk } from "../../redux/profileReducer";
import Preloader from '../common/Preloader/Preloader'

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
        {this.props.profile && <Profile profile={this.props.profile} />}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
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
  };
};

export default compose(
  withRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(ProfileContainer);
