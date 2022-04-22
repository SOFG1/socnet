import React from "react";
import Sidebar from "./Sidebar";
import { connect } from "react-redux";
import { setFriendsThunk as setFriends } from "../../redux/usersReducer";

class SidebarContainer extends React.Component {
    componentDidMount() {
        this.props.setFriends()
    }
    render() {
        return <Sidebar isAuth={this.props.isAuth} friends={this.props.friends} isFetching={this.props.isFetching}/>
    }
}

let mapStateToProps = (state)=> {
    return ({
        isAuth: state.auth.isAuth,
        friends: state.users.friends,
        isFetching: state.users.fetchingFriends,
    })
}



export default connect(mapStateToProps, {setFriends})(SidebarContainer)