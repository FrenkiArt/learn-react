import React from "react";
import { useNavigate } from "react-router-dom";

import MyButton from "../UI/button/MyButton";
import "./post.scss";

const Post = (props) => {
  const router = useNavigate();

  return (
    <div className="post">
      <div className="post__content">
        <div className="post__title">
          {props.post.id + ". " || ""}
          {/* {props.number} */}
          {props.post.title || "Title"}
        </div>
        <div className="post__descr">
          {props.post.descr || props.post.body || "Description"}
        </div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => router(`/posts/${props.post.id}`)}>
          Open
        </MyButton>

        <MyButton
          onClick={() => {
            props.removePost(props.post);
          }}
        >
          Remove
        </MyButton>
      </div>
    </div>
  );
};

export default Post;
