import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthThunk, logOutThunk } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    if (!this.props.authData.isAuth) {
      this.props.setAuth();
    }
  }
  render() {
    return (
      <Header
        {...this.props.authData}
        logOut={this.props.logOut}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authData: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAuth: () => {
      dispatch(setAuthThunk());
    },
    logOut: () => {
      dispatch(logOutThunk())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
