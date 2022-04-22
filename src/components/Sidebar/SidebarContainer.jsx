import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { connect } from "react-redux";
import { setFriendsThunk as setFriends } from "../../redux/usersReducer";

const SidebarContainer = (props)=> {
        useEffect(()=> {
            props.setFriends()
        },[])
        return <Sidebar isAuth={props.isAuth} friends={props.friends} isFetching={props.isFetching}/>
}

let mapStateToProps = (state)=> {
    return ({
        isAuth: state.auth.isAuth,
        friends: state.users.friends,
        isFetching: state.users.fetchingFriends,
    })
}



export default connect(mapStateToProps, {setFriends})(SidebarContainer)