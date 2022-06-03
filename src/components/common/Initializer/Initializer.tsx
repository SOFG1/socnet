import s from './Initializer.module.scss';
import React from 'react';

type PropsType = {}

const Initializer:React.FC = (props: PropsType)=> {
    return (
        <div className={s.Initializer}>
            <div className={s.circle}></div>
        </div>
    )
}

export default Initializer;