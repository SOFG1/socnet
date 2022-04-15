import React from "react";
import Login from "./Login";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import {loginThunk} from '../../redux/authReducer'


class LoginContainer extends React.Component {
    render() {
        console.log(this.props)
        return this.props.auth.isAuth ? <Navigate to="/" /> :<Login {...this.props} />
    }
}

let mapStateToProps = (state)=> {
    return {
        auth: state.auth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (data)=> {
            dispatch(loginThunk(data));
        }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);