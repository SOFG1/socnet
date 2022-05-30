import React from "react";
import { reduxForm, Field } from "redux-form";
import s from "./Login.module.scss";
import TextInput from "../common/TextInput/TextInput.tsx";
import {
  authValidator,
  emailValidator,
  textValidator,
} from "../../utilites/validators";
import Preloader from "../common/Preloader/Preloader.tsx";

const textValidator16 = textValidator(16);
const LoginForm = React.memo((props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <h1 className={s.title}>Log in</h1>
      {props.auth.submitError && (
        <p className={s.notFound}>{props.auth.submitError}</p>
      )}
      <Field
        className={s.input}
        validate={[authValidator, emailValidator]}
        component={TextInput}
        name="email"
        placeholder="Your email..."
        type="text"
      />
      <Field
        className={s.input}
        validate={[authValidator]}
        component={TextInput}
        name="password"
        placeholder="Your password..."
        type="password"
      />
      {props.auth.fetchingCaptcha && (
        <Preloader isFetching={props.auth.fetchingCaptcha} />
      )}
      {props.auth.captcha && (
        <div className={s.captcha}>
          <img
            className={s.captchaImg}
            src={props.auth.captcha}
          />
          <Field
            className={s.input}
            validate={[textValidator16]}
            component={TextInput}
            name="captcha"
            placeholder="Captcha text"
            type="text"
          />
        </div>
      )}
      <div className={s.checkbox}>
        <Field
          className={s.remember}
          component="input"
          name="rememberMe"
          id="remember"
          type="checkbox"
        />
        <label className={s.rememberLabel} htmlFor="remember">
          Remember me
        </label>
      </div>
      <button
        className={s.btn}
        type="submit"
        disabled={props.auth.buttonDisabled}
      >
        <span>Log in</span>
      </button>
    </form>
  );
});

export default reduxForm({ form: "login" })(LoginForm);
