import React from "react";
import { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [likes, setLikes] = useState(0);
  function increment() {
    setLikes(likes + 1);
  }

  function decrement() {
    setLikes(likes - 1);
  }

  return (
    <div className="counter">
      <h2>{likes}</h2>

      <p>
        <button onClick={increment} className="btn-1">
          Increment
        </button>
        <button onClick={decrement} className="btn-1">
          Decrement
        </button>
      </p>
    </div>
  );
};

export default Counter;
