import s from "./Profile.module.scss";
import { reduxForm, Field } from "redux-form";

import Textarea from "../common/Textarea/Textarea.tsx";
import { textValidator } from "../../utilites/validators";

const textValidator500 = textValidator(500);
const PostsForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <Field
        placeholder="Write your post here..."
        className={s.textarea}
        name="post"
        component={Textarea}
        validate={[textValidator500]}
      />
      <button className={s.btn} type="submit">
        Add Post
      </button>
    </form>
  );
};

export default reduxForm({ form: "posts" })(PostsForm);
