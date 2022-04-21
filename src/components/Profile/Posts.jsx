import React from "react";
import s from "./Profile.module.scss";
import PostsForm from "./PostsForm";
import Post from "./Post";

const Posts = React.memo((props)=> {
  return (
    <div className={s.Posts}>
      <h2 className={s.title}>MyPosts</h2>
      <PostsForm onSubmit={props.addPost} />
      {props.posts
        .map((post) => {
          return (
            <Post key={post.id} post={post} likePost={props.likePost} />
          );
        })
        .reverse()}
    </div>
  );
})

export default Posts;
