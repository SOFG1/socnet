import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import {logOutThunk as logOut} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
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


export default connect(mapStateToProps, { logOut})(HeaderContainer);
