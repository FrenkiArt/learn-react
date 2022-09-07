import React from "react";
import { useState } from "react";
import "./post.scss";

const Post = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <div className="post__title">
          {props.post.id + ". " || ""}
          {/* {props.number} */}
          {props.post.title || "Title"}
        </div>
        <div className="post__descr">{props.post.descr || "Description"}</div>
      </div>
      <div className="post__btns">
        <button className="post__btn post__btn--remove">Remove</button>
      </div>
    </div>
  );
};

export default Post;
