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
    <div>
      <p>Current Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Counter</button>
      <button onClick={() => setCount(count - 1)}>Decrease Counter</button>
    </div>
  );
};

export default Counter;
