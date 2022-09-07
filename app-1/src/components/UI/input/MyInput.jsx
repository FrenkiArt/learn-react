import React from "react";
import { useState } from "react";
import classes from "./MyInput.module.scss";

const MyInput = React.forwardRef((props, ref) => {
  return <input ref={ref} {...props} className={classes.myInput} />;
});

export default MyInput;
