import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthThunk } from "../../redux/authReducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.setAuth();
    }
    render() {
        return <Header {...this.props.authData} />
    }
}

const mapStateToProps = (state)=> {
    return (
        {
            authData: state.auth,
        }
    )
}

const mapDispatchToProps = (dispatch)=> {
    return {
        setAuth: (profile)=> {
            dispatch(setAuthThunk);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)