import React from "react";
import { useState, useRef } from "react";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import "./form.scss";

const Form = ({ addPost, makeNewIdForPost, ...props }) => {
  /* const [title, setTitle] = useState("");
  const [descr, setDescr] = useState(""); */
  /* const bodyInputRef = useRef(""); */
  const [post, setPost] = useState({
    title: "",
    descr: "",
  });

  const sendPost = (e) => {
    e.preventDefault();

    /* const newPost = {
      id: makeNewIdForPost(),
      title: title,
      descr: descr,
    }; */

    /* addPost(newPost); */
    addPost(post);

    /* setTitle("");
    setDescr(""); */
    setPost({
      title: "",
      descr: "",
    });
  };

  return (
    <form className="form" {...props}>
      {/* {title + " " + descr} */}
      <div className="form__item">
        {/* <MyInput
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          name="title"
          placeholder="Title"
        /> */}
        <MyInput
          value={post.title}
          onChange={(e) => {
            setPost({ ...post, title: e.target.value });
          }}
          type="text"
          name="title"
          placeholder="Title"
        />
      </div>

      {/* <div className="form__item">
        <input
          ref={bodyInputRef}
          type="text"
          name="description"
          placeholder="Description"
        />
      </div> */}

      {/* <div className="form__item">
        <MyInput
          ref={bodyInputRef}
          type="text"
          name="description"
          placeholder="Description"
        />
      </div> */}

      <div className="form__item">
        <MyInput
          value={post.descr}
          onChange={(e) => {
            setPost({ ...post, descr: e.target.value });
          }}
          type="text"
          name="description"
          placeholder="Description"
        />
      </div>

      <div className="form__item">
        <MyButton onClick={sendPost} type="submit">
          Add post
        </MyButton>
      </div>
    </form>
  );
};

export default Form;
