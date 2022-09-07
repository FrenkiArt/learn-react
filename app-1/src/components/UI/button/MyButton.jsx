import React from "react";
import { useState } from "react";
import classes from "./MyButton.module.scss";

const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.myBtn}>
      {children || "Button"}
    </button>
  );
};

export default MyButton;
