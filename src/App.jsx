import { useEffect, useState } from "react";
import "./App.css";
import MouseTracker from "./MouseTracker";
import ParentComponent from "./ParentComponent";
import useCounter from "./useCounter";

function App() {
  const { count, increment, decrement, reset } = useCounter();
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <ParentComponent />
    </div>
  );
}

export default App;
