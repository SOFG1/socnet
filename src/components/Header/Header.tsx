import React from 'react'
import s from "./Header.module.scss";
import Logo from "../../assets/header-logo.svg";
import { Link } from "react-router-dom";
import Preloader from "../common/Preloader/Preloader.tsx";


const Header :React.FC<any> = (props) => {
  return (
    <header className={s.header}>
      <Link to="/">
        <img src={Logo} alt="header logo" className={s.logo} />
      </Link>

      {props.isFetching ? (
        <Preloader isFetching={props.isFetching} />
      ) : (
        <div className={s.data}>
          {props.profile && (
            <Link className={s.userName} to="profile">
              {props.profile.login}
            </Link>
          )}
          {props.profile && <p className={s.id}>{props.profile.id}</p>}
          {props.profile && props.isAuth && <button onClick={props.logOut} className={s.logout} disabled={props.logoutDisabled}>Logout</button>}
          {!props.isAuth && (
            <Link className={s.login} to="login">
              Log in
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
