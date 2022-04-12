import s from './Header.module.scss';
import Logo from '../../assets/header-logo.svg'

const Header = (props)=> {
    return (
        <header className={s.header}>
            <img src={Logo} alt="header logo" className={s.logo} />
        </header>
    )
}

export default Header