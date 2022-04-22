import s from "./Users.module.scss";
import Preloader from "../common/Preloader/Preloader";
import paginator from "../../utilites/paginator";
import avatar from "../../assets/avatar.png";
import { Link } from "react-router-dom";

const Users = (props) => {
  return (
    <div className={s.Users}>
      <h1 className={s.title}>Users</h1>
      <Preloader isFetching={props.isFetching} />
      <div className={s.pagination}>
      {props.pages.map((page, index) => {
          return page ? (
            <Link
              to={`/users/${page}`}
              key={page}
              className={
                page === props.current ? `${s.page} ${s.active}` : s.page
              }
            >
              {page}
            </Link>
          ) : (
            <span key={index - 0.5} className={s.dots}>
              ...
            </span>
          );
        })}
      </div>

      <div className={s.usersList}>
        {props.users.map((user) => {
          return (
            <div className={s.user} key={user.id}>
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
        })}
      </div>
    </div>
  );
};

export default Users;
