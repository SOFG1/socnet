import s from "./Sidebar.module.scss";
import { NavLink } from "react-router-dom";
import Friend from "./Friend";
import Preloader from "../common/Preloader/Preloader";

const Sidebar = (props) => {

  return (
    <div className={props.sideBar ? s.Sidebar : `${s.Sidebar} ${s.opened}`}>
      <ul className={s.list}>
        {props.isAuth && (
          <li className={s.item}>
            <NavLink className={({isActive}) => isActive ? `${s.link} ${s.active}` : s.link} to="profile" onClick={()=> props.toggleSidebar(false)}>
              Profile
            </NavLink>
          </li>
        )}

        {props.isAuth && (
          <li className={s.item}>
            <NavLink className={({isActive}) => isActive ? `${s.link} ${s.active}` : s.link} to="messages" onClick={()=> props.toggleSidebar(false)}>
              Messages
            </NavLink>
          </li>
        )}
        <li className={s.item}>
          <NavLink className={({isActive}) => isActive ? `${s.link} ${s.active}` : s.link} to="users" onClick={()=> props.toggleSidebar(false)}>
            Users
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={({isActive}) => isActive ? `${s.link} ${s.active}` : s.link} to="music" onClick={()=> props.toggleSidebar(false)}>
            Music
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={({isActive}) => isActive ? `${s.link} ${s.active}` : s.link} to="news" onClick={()=> props.toggleSidebar(false)}>
            News
          </NavLink>
        </li>
        {props.isAuth && (
          <li className={s.item}>
            <NavLink className={({isActive}) => isActive ? `${s.link} ${s.active}` : s.link} to="settings" onClick={()=> props.toggleSidebar(false)}>
              Settings
            </NavLink>
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
              {props.friends[0] && <Friend friend={props.friends[0]} key={props.friends[0].id} toggleSidebar={props.toggleSidebar} />}
              {props.friends[1] && <Friend friend={props.friends[1]} key={props.friends[1].id} toggleSidebar={props.toggleSidebar} />}
              {props.friends[2] && <Friend friend={props.friends[2]} key={props.friends[2].id} toggleSidebar={props.toggleSidebar} />}
              </>
            )}
          </div>
        </div>
      )}
      <button onClick={()=> props.toggleSidebar(!props.sideBar)} className={s.trigger}>{props.sideBar ? '<' : '>'}</button>
    </div>
  );
};

export default Sidebar;
