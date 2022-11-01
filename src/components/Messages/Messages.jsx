import s from "./Messages.module.scss";
import avatar from "../../assets/avatar.png";
import { Link } from "react-router-dom";
import MessagesForm from "./MessagesForm";
import userAvatar from "../../assets/avatar.png";
import { useEffect, useState } from "react";
import { useCallback } from "react";
import { useRef } from "react";
import { ws } from "../../api/websocket.ts";

const Messages = (props) => {
  const [messages, setMessages] = useState([]);
  const messagesBox = useRef();

  //Get messages websocket
  useEffect(() => {
    if (messages.length === 0) {
      ws.addEventListener("message", (e) => {
        setMessages((prev) => [...prev, ...JSON.parse(e.data)]);
        // Setting messages box scroll
      });
    }
  }, []);

  //Send message
  const sendMessage = useCallback(
    (message) => {
      if (ws) ws.send(message);
    },
    [ws]
  );

  //Set scroll to bottom
  useEffect(() => {
    messagesBox.current.scrollTop = messagesBox.current.scrollHeight + messagesBox.current.offsetHeight
  }, [messages])

  useEffect(() => {
    if (messagesBox) {
      messagesBox.current.addEventListener("scroll", () => {
        console.log('scroll Top',messagesBox.current.scrollTop);
        console.log('scroll Height',messagesBox.current.scrollHeight);
        console.log('inner Height',messagesBox.current.offsetHeight);
      });
    }
  }, [messagesBox]);

  return (
    <div className={s.Messages}>
      <ul className={s.friends}>
        {props.friends.length === 0 ? (
          <p className={s.empty}>You don't have friends yet</p>
        ) : (
          props.friends.map((friend) => {
            return (
              <Link
                className={s.friend}
                key={friend.id}
                to={`/profile/${friend.id}`}
              >
                <img
                  src={friend.photos.small ? friend.photos.small : avatar}
                  alt=""
                  className={s.avatar}
                />
                <p className={s.name}>{friend.name}</p>
              </Link>
            );
          })
        )}
      </ul>
      <div className={s.messages}>
        <div className={s.messagesBox} ref={messagesBox}>
          {messages.map((message, index) => {
            return (
              <div className={s.message} key={index}>
                <div className={s.messageBox}>
                  <Link to={`/profile/${message.userId}`}>
                    <img
                      src={message.photo || userAvatar}
                      className={s.messageAvatar}
                    />
                  </Link>
                  <span className={s.messageDate}>{message.userId}</span>
                </div>
                <p className={s.messageText}>{message.message}</p>
              </div>
            );
          })}
        </div>
        <MessagesForm onSubmit={(data) => sendMessage(data.message)} />
      </div>
    </div>
  );
};

export default Messages;
