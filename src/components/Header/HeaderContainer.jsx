import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import {logOutThunk as logOut} from "../../redux/authReducer.ts";

const HeaderContainer = (props)=> {
    return (
      <Header
        {...props.authData}
        logOut={props.logOut}
      />
    );
}

const mapStateToProps = (state) => {
  return {
    authData: state.auth,
  };
};


export default connect(mapStateToProps, { logOut})(HeaderContainer);
