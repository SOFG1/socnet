import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const withAuth = (Component)=> {
    class withRedirect extends React.Component {
        render() {
            console.log(this.props)
            if (this.props.isAuth === false && this.props.uesrId) {
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



export default withAuth;