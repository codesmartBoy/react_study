import React, { memo } from "react";
import { connect } from "react-redux";
import { addNumberAction, subNumberAction } from "./store/module/counter";
const App = memo((props) => {
  const { count, addNumber, subNumber } = props;

  function numberHandler(num, isAdd = true) {
    isAdd ? addNumber(num) : subNumber(num);
  }

  return (
    <div>
      <h2>当前计数:{count}</h2>
      <button onClick={() => numberHandler(1)}>+</button>
      <button onClick={() => numberHandler(1, false)}>-</button>
    </div>
  );
});

const mapStateToProps = (state) => ({
  count: state.counter.counter,
});

const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumberAction(num));
  },
  subNumber(num) {
    dispatch(subNumberAction(num));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
