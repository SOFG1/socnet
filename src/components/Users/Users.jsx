import s from "./Users.module.scss";
import Preloader from "../common/Preloader/Preloader";
import Pagination from "../common/Pagination/Pagination.tsx";
import User from "./User";

const Users = (props) => {
  return (
    <div className={s.Users}>
      <h1 className={s.title}>Users</h1>
      <Preloader isFetching={props.isFetching} />
      <Pagination numberOfPages={props.numberOfPages} currentPage={props.current} changePage={props.toPage}/>

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
