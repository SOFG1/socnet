import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import withRedirect from "../../hoc/withAuth";
import Messages from "./Messages";
import {sendMessageThunk} from '../../redux/profileReducer'

class MessagesContainer extends React.Component {
    render() {
        return (
            <Messages messages={this.props.messages} friends={this.props.friends} sendMessage={this.props.sendMessage}/>
        )
    }
}

let mapStateToProps = (state)=> {
    return {
        friends: state.users.friends,
        messages: state.profile.messages,
    }
}

let mapDispatchToProps = (dispatch)=> {
    return {
        sendMessage: (submit)=> {
            dispatch(sendMessageThunk(submit.message))
        }
    }
}


export default compose(withRedirect, connect(mapStateToProps, mapDispatchToProps))(MessagesContainer)