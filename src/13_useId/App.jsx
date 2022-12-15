import React, { memo, useId, useState } from "react";

const App = memo(() => {
  const id = useId();
  const [count, setCount] = useState(0);
  console.log(id);
  return (
    <div>
      <h2>当前计数:{count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
});

export default App;
