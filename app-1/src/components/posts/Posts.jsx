import React from "react";
import Post from "../post/Post";
import "./posts.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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

      <TransitionGroup>
        {props.posts.map((post, index) => {
          return (
            <CSSTransition key={post.id} timeout={500} classNames="wrap-post">
              <Post
                removePost={props.removePost}
                number={index + 1}
                post={post}
                key={post.id}
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default Posts;
