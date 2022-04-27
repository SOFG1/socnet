import s from "./Sidebar.module.scss";
import { NavLink } from "react-router-dom";
import Friend from "./Friend";
import Preloader from "../common/Preloader/Preloader";
import cn from "classnames";

const Sidebar = (props) => {
  return (
    <div className={cn(s.Sidebar, {[s.opened]: !props.sideBar})}>
      <ul className={s.list}>
        {props.isAuth && (
          <li className={s.item}>
            <NavLink className={({isActive}) => cn(s.link, {[s.active]: isActive})} to="profile" onClick={()=> props.toggleSidebar(false)}>
              Profile
            </NavLink>
          </li>
        )}

        {props.isAuth && (
          <li className={s.item}>
            <NavLink className={({isActive}) => cn(s.link, {[s.active]: isActive})} to="messages" onClick={()=> props.toggleSidebar(false)}>
              Messages
            </NavLink>
          </li>
        )}
        <li className={s.item}>
          <NavLink className={({isActive}) => cn(s.link, {[s.active]: isActive})} to="users" onClick={()=> props.toggleSidebar(false)}>
            Users
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={({isActive}) => cn(s.link, {[s.active]: isActive})} to="music" onClick={()=> props.toggleSidebar(false)}>
            Music
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={({isActive}) => cn(s.link, {[s.active]: isActive})} to="news" onClick={()=> props.toggleSidebar(false)}>
            News
          </NavLink>
        </li>
        {props.isAuth && (
          <li className={s.item}>
            <NavLink className={({isActive}) => cn(s.link, {[s.active]: isActive})} to="settings" onClick={()=> props.toggleSidebar(false)}>
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
