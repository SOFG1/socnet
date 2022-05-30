import s from './Messages.module.scss';
import { reduxForm, Field } from 'redux-form';
import TextArea from '../common/Textarea/Textarea.tsx';
import { textValidator } from '../../utilites/validators';
const textValidator300 = textValidator(300)

const MessagesForm = (props) => {
    const {handleSubmit} = props;
    return (
        <form className={s.MessagesForm} onSubmit={handleSubmit}>
            <Field className={s.textarea} component={TextArea} name="message" validate={[textValidator300]} />
            <button className={s.btn} type="submit">Send</button>
        </form>
    )
}

export default reduxForm({form: 'messages'})(MessagesForm);