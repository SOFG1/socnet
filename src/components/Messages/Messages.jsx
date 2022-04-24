import s from "./Messages.module.scss";
import avatar from "../../assets/avatar.png";
import { Link } from "react-router-dom";
import MessagesForm from "./MessagesForm";

const Messages = (props) => {
  return (
    <div className={s.Messages}>
      <div className={s.box}>
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
          {props.messages.map((message) => {
            return (
              <div className={s.message} key={message.id}>
                <p className={s.messageText}>{message.text}</p>
                <div className={s.messageBox}>
                  <span className={s.messageDate}>{message.date}</span>
                </div>
              </div>
            );
          })}
          <MessagesForm onSubmit={(data)=> props.sendMessage(data.message)} />
        </div>
      </div>
    </div>
  );
};

export default Messages;
