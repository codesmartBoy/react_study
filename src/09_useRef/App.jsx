import React, { memo, useRef, useState, useCallback } from "react";

let obj = null;
const App = memo(() => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  ref.current = count;
  console.log(obj === ref);
  obj = ref;

  const incrementCallback = useCallback(() => setCount(ref.current + 1), []);
  function showTitle() {
    console.log(ref.current);
  }
  return (
    <div>
      <h2>hello world:{count}</h2>
      <button onClick={incrementCallback}>+1</button>
      <h2>App</h2>
      <button onClick={showTitle}>look for document title</button>
    </div>
  );
});

export default App;
