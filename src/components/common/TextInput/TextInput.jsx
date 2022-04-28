import s from './TextInput.module.scss';

const TextInput = ({input, meta, ...props})=> {
    console.log({input, meta, ...props})
    return (
        <div className={s.box}>
            <input {...props} {...input} />
            {meta.error && meta.error.code === 3 && <p className={s.error}>{meta.error && meta.error.message}</p>}
            {meta.error && [0,1,2,4].includes(meta.error.code) && meta.touched && !meta.active && <p className={s.error}>{meta.error && meta.error.message}</p>}
        </div>
    )
}

export default TextInput;