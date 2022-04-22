import React from "react";
import Login from "./Login";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginThunk as login } from "../../redux/authReducer";

const LoginContainer = (props) => {
  return props.auth.isAuth ? <Navigate to="/" /> : <Login {...props} />;
};

let mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { login })(LoginContainer);
