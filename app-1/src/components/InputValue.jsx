import React from "react";
import { useState } from "react";

const InputValue = () => {
  const [value, setValue] = useState("test text");

  function inputHandler(e) {
    setValue(e.target.value);
  }

  return (
    <div>
      <h2>{value}</h2>
      <p>
        <input
          type="text"
          onChange={inputHandler}
          defaultValue={value}
          className="input"
        ></input>
      </p>
    </div>
  );
};

export default InputValue;
