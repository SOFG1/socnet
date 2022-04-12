import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const withRedirect = (Component)=> {
    class withRedirect extends React.Component {
        render() {
            if (this.props.isAuth === false) {
                return <Navigate to="/login" />
            }
            return(
                <Component {...this.props} />
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



export default withRedirect;