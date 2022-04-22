import s from "./Users.module.scss";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.png";

const User = ({ user, ...props }) => {
  return (
    <div className={s.user}>
      <div className={s.left}>
        <Link to={`/profile/${user.id}`} className={s.link}>
          <img
            src={user.photos.large ? user.photos.large : avatar}
            alt="User avatar"
            className={s.avatar}
          />
        </Link>
        {user.followed && props.isAuth && (
          <button
            onClick={() => props.unfollowUser(user.id)}
            className={s.btn}
            disabled={props.disabled.includes(user.id)}
          >
            Unfollow
          </button>
        )}
        {!user.followed && props.isAuth && (
          <button
            onClick={() => props.followUser(user.id)}
            disabled={props.disabled.includes(user.id)}
            className={s.btn}
          >
            Follow
          </button>
        )}
      </div>
      <div className={s.right}>
        <Link to={`/profile/${user.id}`} className={s.link}>
          <h2 className={s.name}>{user.name}</h2>
        </Link>
        <p className={s.id}>{user.id}</p>
      </div>
    </div>
  );
};

export default User;
