import React from "react";
import Post from "../post/Post";
import "./posts.scss";

const Posts = (props) => {
  if (!props.posts.length) {
    return (
      <div className="posts__404">
        <h2>Посты не найдены!</h2>
      </div>
    );
  }

  return (
    <div className="posts">
      <div className="posts__title">{props.title || "Список постов"}</div>

      {props.posts.map((post, index) => {
        return (
          <Post
            removePost={props.removePost}
            number={index + 1}
            post={post}
            key={post.id}
          />
        );
      })}
    </div>
  );
};

export default Posts;
