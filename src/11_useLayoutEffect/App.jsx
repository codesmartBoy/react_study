import React, { memo, useState, useEffect, useLayoutEffect } from "react";

const App = memo(() => {
  const [count, setCount] = useState(100);
  useLayoutEffect(() => {
    console.log("-1");
    if (count == 0) {
      setCount(Math.random() + 99);
    }
  });
  useEffect(() => {
    console.log("first");
    // if (count == 0) {
    //   setCount(Math.random() + 99);
    // }
  });

  return (
    <div>
      <h2>当前计数:{count}</h2>
      <button onClick={() => setCount(0)}>+1</button>
    </div>
  );
});

export default App;
