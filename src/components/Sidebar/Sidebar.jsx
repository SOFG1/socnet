import s from "./Sidebar.module.scss";
import { Link } from "react-router-dom";
import Friend from "./Friend";

const Sidebar = (props) => {
  return (
    <div className={s.Sidebar}>
      <ul className={s.list}>
        {props.isAuth && (
          <li className={s.item}>
            <Link className={s.link} to="profile">
              Profile
            </Link>
          </li>
        )}

        {props.isAuth && (
          <li className={s.item}>
            <Link className={s.link} to="messages">
              Messages
            </Link>
          </li>
        )}
        <li className={s.item}>
          <Link className={s.link} to="users">
            Users
          </Link>
        </li>
        <li className={s.item}>
          <Link className={s.link} to="music">
            Music
          </Link>
        </li>
        <li className={s.item}>
          <Link className={s.link} to="news">
            News
          </Link>
        </li>
        {props.isAuth && (
          <li className={s.item}>
            <Link className={s.link} to="settings">
              Settings
            </Link>
          </li>
        )}
      </ul>

      {props.isAuth && (
        <div className={s.friends}>
          <h4 className={s.title}>Friends</h4>
          {props.friends.length < 1 ? (
            <p className={s.empty}>You don't have friends yet :(</p>
          ) : null}
          <div className={s.friendsBox}>
            {props.friends.map((friend) => (
              <Friend friend={friend} key={friend.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
