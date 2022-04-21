import React from "react";
import s from "./Profile.module.scss";
import PostsForm from "./PostsForm";
import Post from './Post'

class Posts extends React.Component {

  componentDidUpdate() {
    console.log('updated')
  }
  
  render() {
    return (
      <div className={s.Posts}>
        <h2 className={s.title}>MyPosts</h2>
        <PostsForm onSubmit={this.props.addPost} />
        {this.props.posts
          .map((post) => {
            return (
              <Post key={post.id} post={post} likePost={this.props.likePost} />
            );
          })
          .reverse()}
      </div>
    );
  }
};

export default Posts;
