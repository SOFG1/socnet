import s from "./Users.module.scss";
import Preloader from "../common/Preloader/Preloader";
import { Link } from "react-router-dom";
import User from "./User";

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
            <User key={user.id} user={user} isAuth={props.isAuth} unfollowUser={props.unfollowUser} disabled={props.disabled} followUser={props.followUser}/>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
