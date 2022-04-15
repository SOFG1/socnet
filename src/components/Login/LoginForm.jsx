import { reduxForm, Field } from "redux-form";
import s from './Login.module.scss';
import TextInput from "../common/TextInput/TextInput";
import { authValidator } from "../../utilites/validators";

const LoginForm = (props)=> {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <h1 className={s.title}>Log in</h1>
            {props.auth.userNotFound && <p className={s.notFound}>User not found !</p>}
            <Field className={s.input} validate={[authValidator]} component={TextInput} name="email" placeholder="Your email..." type="text" />
            <Field className={s.input} validate={[authValidator]} component={TextInput} name="password" placeholder="Your password..." type="password"/>
            <div className={s.checkbox}>
                <Field className={s.remember} component="input" name="rememberMe" id="remember" type="checkbox"/>
                <label className={s.rememberLabel} htmlFor="remember">Remember me</label>
            </div>
            <button className={s.btn} type="submit" disabled={props.auth.buttonDisabled}><span>LOg in</span></button>
        </form>
    )
}

export default reduxForm({form: 'login'})(LoginForm);