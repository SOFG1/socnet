import s from './Login.module.scss';
import LoginForm from './LoginForm';

const Login = (props)=> {
    return(
        <div className={s.Login}>
           <LoginForm onSubmit={props.login} {...props}/>
        </div>
    )
}

export default Login;