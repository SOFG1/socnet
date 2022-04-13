import React from "react";
import s from "./Profile.module.scss";
import avatar from "../../assets/avatar.png";
import PostsForm from "./PostsForm";

const Posts = (props) => {

  return (
    <div className={s.Posts}>
      <h2 className={s.title}>MyPosts</h2>
    <PostsForm onSubmit={props.addPost} />
      {props.posts.map((post) => {
        return (
          <div className={s.post} key={post.id}>
            <img
              src={
                props.profile && props.profile.photos.small
                  ? props.profile.photos.small
                  : avatar
              }
              alt="user avatar"
              className={s.postAvatar}
            />
            <p className={s.text}>{post.text}</p>
            <div className={s.postBox}>
              <button onClick={()=> props.likePost(post.id)} className={s.likeBtn}>Like</button>
              <p className={s.likes}>{post.likes} Likes</p>
            </div>
          </div>
        );
      }).reverse()}
    </div>
  );
};

export default (Posts);
