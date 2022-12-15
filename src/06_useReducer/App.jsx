import React, { memo, useReducer } from "react";

const initialState = { count: 0, friends: [], user: {} };
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "add_number":
      return { count: state.count + action.num };
    case "sub_number":
      return { count: state.count - action.num };
    default:
      throw new Error();
  }
}

const App = memo(() => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>当前计数:{state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
      <button onClick={() => dispatch({ type: "add_number", num: 4 })}>
        +4
      </button>
      <button onClick={() => dispatch({ type: "sub_number", num: 50 })}>
        -50
      </button>
    </div>
  );
});

export default App;
