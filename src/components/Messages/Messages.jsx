import s from "./Messages.module.scss";
import avatar from "../../assets/avatar.png";
import { NavLink } from "react-router-dom";
import MessagesForm from "./MessagesForm";

const Messages = (props) => {
  return (
    <div className={s.MessagesPage}>
      <h1 className={s.title}>Messages</h1>
      <div className={s.box}>
        <ul className={s.friends}>
          {props.friends.length === 0 ? (
            <p className={s.empty}>You don't have friends yet</p>
          ) : (
            props.friends.map((friend) => {
              return (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${s.friend} ${s.active}` : s.friend
                  }
                  key={friend.id}
                  to={`/messages/${friend.id}`}
                >
                  <img
                    src={friend.photos.small ? friend.photos.small : avatar}
                    alt=""
                    className={s.avatar}
                  />
                  <p className={s.name}>{friend.name}</p>
                </NavLink>
              );
            })
          )}
        </ul>
        <div className={s.messages}>
          {props.messages.map((message) => {
            return (
              <div className={s.message} key={message.id}>
                <p className={s.messageText}>{message.text}</p>
                <div>
                  <span className={s.messageDate}>{message.date}</span>
                </div>
              </div>
            );
          })}
          <MessagesForm onSubmit={props.sendMessage} />
        </div>
      </div>
    </div>
  );
};

export default Messages;
