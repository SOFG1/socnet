import s from "./Users.module.scss";
import Preloader from "../common/Preloader/Preloader";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import User from "./User";

const Users = (props) => {
  return (
    <div className={s.Users}>
      <h1 className={s.title}>Users</h1>
      <Preloader isFetching={props.isFetching} />
      <Pagination pages={props.pages} current={props.current} />

      <div className={s.usersList}>
        {props.users.map((user) => {
          return (
            <User
              key={user.id}
              user={user}
              isAuth={props.isAuth}
              unfollowUser={props.unfollowUser}
              disabled={props.disabled}
              followUser={props.followUser}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Users;
