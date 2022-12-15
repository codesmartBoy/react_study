import React, { memo } from "react";
import CounterHook from "./CounterHook";
import Couter from "./Couter";

const App = memo(() => {
  return (
    <div>
      <h1>App</h1>
      <Couter />
      <CounterHook />
    </div>
  );
});

export default App;
