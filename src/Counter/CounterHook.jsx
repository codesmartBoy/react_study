import React, { memo, useState } from "react";

const CounterHook = memo(() => {
  const [couter, setCounter] = useState(0);
  return (
    <div>
      <h2>当前计数:{couter}</h2>
      <button onClick={(e) => setCounter(couter + 1)}>+1</button>
      <button onClick={(e) => setCounter(couter - 1)}>-1</button>
    </div>
  );
});

export default CounterHook;
