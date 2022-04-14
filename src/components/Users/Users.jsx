import s from "./Users.module.scss";
import Preloader from "../common/Preloader/Preloader";
import paginator from "../../utilites/paginator";
import avatar from '../../assets/avatar.png';
import { Link } from "react-router-dom";

const Users = (props) => {
  console.log(props);
  let pages = paginator(props.pages, props.current);

  return (
    <div className={s.Users}>
      <h1 className={s.title}>Users</h1>
      <Preloader isFetching={props.isFetching} />
      <div className={s.pagination}>
        {pages.map((page, index) => {
            return (
                page ? (            <Link
                to={`/users/${page}`}
                key={page}
                    className={
                      page === props.current
                        ? `${s.page} ${s.active}`
                        : s.page
                    }
                  >
                    {page}
                  </Link>) : (
                      <span key={index - 0.5} className={s.dots}>...</span>
                  )
            )
        })}
      </div>

      <div className={s.usersList}>
        {props.users.map(user => {
          return (
            <Link to={`/profile/${user.id}`} className={s.user} key={user.id}>
              <div className={s.left}>
                <img src={user.photos.large ? user.photos.large : avatar} alt="User avatar" className={s.avatar} />
                <button className={s.btn}>{user.followed ? 'unfollow' : 'follow'}</button>
              </div>
              <div className={s.right}>
                <h2 className={s.name}>{user.name}</h2>
                <p className={s.id}>{user.id}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  );
};

export default Users;
