import React, { memo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import {
  addNumberAction,
  subNumberAction,
  changeMessageAction,
} from "./store/module/counter";

const Home = memo((props) => {
  console.log("home reload");
  // 默认监听的是整个state
  const { message } = useSelector(
    (state) => ({
      message: state.counter.message,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  function changeMessageHandler() {
    dispatch(changeMessageAction("你好"));
  }

  return (
    <div>
      <h2>Home: {message}</h2>
      <button onClick={() => changeMessageHandler()}>修改message</button>
    </div>
  );
});

const App = memo((props) => {
  console.log("app reload ");
  const { count } = useSelector(
    (state) => ({
      count: state.counter.counter,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  function numberHandler(num, isAdd = true) {
    dispatch(isAdd ? addNumberAction(num) : subNumberAction(num));
  }

  return (
    <div>
      <h2>当前计数:{count}</h2>
      <button onClick={() => numberHandler(1)}>+</button>
      <button onClick={() => numberHandler(1, false)}>-</button>
      <Home />
    </div>
  );
});

export default App;
