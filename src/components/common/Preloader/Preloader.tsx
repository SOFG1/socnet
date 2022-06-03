import React from 'react';
import s from './Preloader.module.scss';

type PropsType = {
    isFetching: boolean
}

const Preloader: React.FC<PropsType> = (props)=> {
    return(
        <div className={s.Preloader}>
            {props.isFetching && <div className={s.circle}></div>}
        </div>
    )
}

export default Preloader