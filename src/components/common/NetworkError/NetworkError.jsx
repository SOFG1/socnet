import s from './NetworkError.module.scss';
import classNames from 'classnames';

const NetworkError = ({hasError})=> {
    return (
        <div className={classNames(s.NetworkError, {[s.active]: hasError})}>
            Network error !
        </div>
    )
}

export default NetworkError