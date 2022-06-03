import React from 'react';
import s from './NetworkError.module.scss';
import classNames from 'classnames';

type PropsType = {
    hasError: boolean
}

const NetworkError: React.FC<PropsType> = (props) => {
    return (
        <div className={classNames(s.NetworkError, {[s.active]: props.hasError})}>
            Network error !
        </div>
    )
}

export default NetworkError