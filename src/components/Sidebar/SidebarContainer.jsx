import React from "react";
import Sidebar from "./Sidebar";
import { connect } from "react-redux";

class SidebarContainer extends React.Component {
    render() {
        return <Sidebar isAuth={this.props.isAuth} friends={this.props.friends}/>
    }
}

let mapStateToProps = (state)=> {
    return ({
        isAuth: state.auth.isAuth,
        friends: state.users.friends,
    })
}

let mapDispatchToProps = (dispatch)=> {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer)