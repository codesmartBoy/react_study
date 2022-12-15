import React, { memo, useState, useMemo } from "react";

function calcNumber(num) {
  let total = 0;
  console.log("计算函数重新被调用");
  for (let i = 0; i <= num; i++) {
    total += i;
  }
  return total;
}

const App = memo(() => {
  const [count, setCount] = useState(0);
  let result = useMemo(() => {
    return calcNumber(count);
  }, [count]);
  return (
    <div>
      <h2>计算结果：{result}</h2>
      <h2>当前计数:{count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
});

export default App;
