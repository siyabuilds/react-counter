import React, { useState, useEffect } from "react";
import "./App.css";

const Counter = () => {
  const initialCount = localStorage.getItem("count")
    ? parseInt(localStorage.getItem("count"))
    : 0;
  const [count, setCount] = useState(initialCount);
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);
  return (
    <div className="container">
      <p className="counter-text">
        Current Counter: <span className="counter">{count}</span>
      </p>
      <button className="increment-btn" onClick={() => setCount(count + 1)}>
        Increase Counter
      </button>
      <button className="decrement-btn" onClick={() => setCount(count - 1)}>
        Decrease Counter
      </button>
    </div>
  );
};

export default Counter;
