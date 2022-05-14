import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import withRedirect from "../../hoc/withAuth";
import Messages from "./Messages";
import {sendMessageThunk as sendMessage} from '../../redux/profileReducer.ts'

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


export default compose(withRedirect, connect(mapStateToProps, {sendMessage}))(MessagesContainer)