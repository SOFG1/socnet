import s from "./Header.module.scss";
import Logo from "../../assets/header-logo.svg";
import { Link } from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";

const Header = (props) => {
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
          {props.profile && (
            <p className={s.email}>{props.profile.email}</p>
          )}
          {props.profile && <p className={s.id}>{props.profile.id}</p>}
          {!props.isAuth && (
            <Link className={s.login} to="login">
              Login
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
