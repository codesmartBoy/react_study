import React, { memo, useRef, forwardRef, useImperativeHandle } from "react";

const HelloWorld = memo(
  // 对父组件传入的ref进行处理
  forwardRef((props, ref) => {
    useImperativeHandle(ref, () => {
      return {
        focus() {
          console.log("first");
        },
      };
    });
    return <input type="text" ref={ref} />;
  })
);

const App = memo(() => {
  const titleRef = useRef();
  const inputRef = useRef();

  function handleDom() {
    console.log(titleRef.current);
    inputRef.current.focus();
  }
  return (
    <div>
      <h2 ref={titleRef}>App</h2>
      <HelloWorld ref={inputRef} />
      <button onClick={handleDom}>DOM操作</button>
    </div>
  );
});

export default App;
