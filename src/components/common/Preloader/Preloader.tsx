import s from './Preloader.module.scss';

const Preloader = (props)=> {
    return(
        <div className={s.Preloader}>
            {props.isFetching && <div className={s.circle}></div>}
        </div>
    )
}

export default Preloader