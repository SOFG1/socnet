import s from './Profile.module.scss'
import avatar from "../../assets/avatar.png";

const Post = (props)=> {
    return(
        <div className={s.post}>
              <img src={avatar} alt="user avatar" className={s.postAvatar} />
              <p className={s.text}>{props.post.text}</p>
              <div className={s.postBox}>
                <button
                  onClick={() => props.likePost(props.post.id)}
                  className={s.likeBtn}
                >
                  Like
                </button>
                <p className={s.likes}>{props.post.likes} Likes</p>
              </div>
            </div>
    )
}

export default Post