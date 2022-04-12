import s from './Header.module.scss';
import Logo from '../../assets/header-logo.svg';
import { Link } from 'react-router-dom';

const Header = (props)=> {
    console.log(props)
    return (
        <header className={s.header}>
            <Link to="/">
            <img src={Logo} alt="header logo" className={s.logo} />
            </Link>

            <div className={s.data}>
                {props.profile.login && <Link className={s.userName} to="profile">{props.profile.login}</Link>}
                {props.profile.email && <p className={s.email}>{props.profile.email}</p>}
                {props.profile.id && <p className={s.id}>{props.profile.id}</p>}
                {!props.isAuth && <Link className={s.login} to="login">Login</Link>}
            </div>
        </header>
    )
}

export default Header