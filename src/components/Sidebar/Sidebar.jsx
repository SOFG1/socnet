import s from "./Sidebar.module.scss";
import { Link } from "react-router-dom";
import Friend from "./Friend";
import Preloader from "../common/Preloader/Preloader";

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
          {(props.friends.length < 1 && !props.isFetching)? (
            <p className={s.empty}>You don't have friends yet :(</p>
          ) : null}

          <div className={s.friendsBox}>
            {props.isFetching ? (
              <Preloader isFetching={props.isFetching}/>
            ) : (
              <>
              {props.friends[0] && <Friend friend={props.friends[0]} key={props.friends[0].id} />}
              {props.friends[1] && <Friend friend={props.friends[1]} key={props.friends[1].id} />}
              {props.friends[2] && <Friend friend={props.friends[2]} key={props.friends[2].id} />}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
