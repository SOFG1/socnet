import s from './Initializer.module.scss';
import React from 'react';

const Initializer:React.FC = (props:{})=> {
    return (
        <div className={s.Initializer}>
            <div className={s.circle}></div>
        </div>
    )
}

export default Initializer;