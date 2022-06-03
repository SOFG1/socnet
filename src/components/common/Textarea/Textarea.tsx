import React from 'react';
import s from './Textarea.module.scss';

const Textarea: React.FC = ({ input, meta, ...props }: any) => {
  return (
    <div className={s.container}>
      {meta.error && meta.error.code === 0 && meta.touched && !meta.active && <p className={s.error}>{meta.error.message}</p>}
      {meta.error && meta.error.code === 1 && <p className={s.error}>{meta.error.message}</p>}
      {meta.error && meta.error.code === 2 && meta.touched && !meta.active && <p className={s.error}>{meta.error.message}</p>}
      <textarea {...input} {...props}></textarea>
    </div>
  );
};

export default Textarea;
