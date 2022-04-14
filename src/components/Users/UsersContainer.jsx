import React from "react";
import Users from "./Users";
import { connect } from "react-redux";

class UsersContainer extends React.Component {
    render() {
        return <Users {...this.props} />
    }
}

let mapStateToProps = (state)=> {
    return {
        users: state.users.users,
        pages: state.users.numberOfPages,
        isFetching: state.users.fetchingUsers,
        current: state.users.curentPage,
    }
}

export default connect(mapStateToProps, {})(UsersContainer);