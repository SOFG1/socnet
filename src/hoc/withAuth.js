import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const withAuth = (Component)=> {
    class withRedirect extends React.Component {
        render() {
            if (this.props.isAuth === false) {

                return <Navigate to="/login" />
            }
            return(
                <Component  />
            )
        }
    }
    const mapStateToProps = (state)=> {
        return {
            isAuth: state.auth.isAuth,
        }
    }
    return connect(mapStateToProps)(withRedirect);
}



export default withAuth;