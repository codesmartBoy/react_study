import React, { memo, useState, useCallback, useRef } from "react";

const Increment = memo((props) => {
  const { increment } = props;
  console.log("first reload");
  return (
    <div>
      <button onClick={increment}>increment+1</button>
    </div>
  );
});

const App = memo(() => {
  const [couter, setCounter] = useState(0);
  const [message, setMessage] = useState("hello world");
  const couterRef = useRef();
  couterRef.current = couter;
  // const increment = () => setCounter(couter + 1);
  //  进一步的优化：当count发生改变时，也使用同一个函数
  // 做法一：将count依赖移除掉，缺点，闭包
  const incrementCallback = useCallback(
    () => setCounter(couterRef.current + 1),
    []
  );
  return (
    <div>
      <h2>当前计数:{couter}</h2>
      <button onClick={incrementCallback}>+1</button>
      <Increment increment={incrementCallback} />
      <h2>message:{message}</h2>
      <button onClick={() => setMessage("你好")}>修改message</button>
    </div>
  );
});

export default App;
