import React from "react";
import Post from "../post/Post";
import "./posts.scss";

const Posts = (props) => {
  return (
    <div className="posts">
      <div className="posts__title">{props.title || "Список постов"}</div>

      {props.posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
};

export default Posts;
