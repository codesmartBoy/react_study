// import React, { PureComponent } from "react";

// export class App extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = { couter: 100 };
//   }
//   componentDidMount() {
//     document.title = this.state.couter;
//   }
//   componentDidUpdate() {
//     document.title = this.state.couter;
//   }
//   addCouter() {
//     this.setState({ couter: this.state.couter + 1 });
//   }
//   render() {
//     const { couter } = this.state;
//     return (
//       <div>
//         <h1>Couter Page</h1>
//         <h2>计数:{couter}</h2>
//         <button onClick={() => this.addCouter()}>+1</button>
//       </div>
//     );
//   }
// }

// export default App;

import React, { memo, useState, useEffect } from "react";

const App = memo(() => {
  const [couter, setCounter] = useState(0);
  // useEffect 第二个参数 [] 不受任何的影响
  useEffect(() => {
    // 在组件渲染完成后每次主动执行
    // document.title = couter;

    // 又返回值:回调函数 => 组件被重新渲染或者组件卸载的时候执行
    console.log("================================");
    return () => {
      console.log("取消监听");
    };
  }, []);
  return (
    <div>
      <h2>当前计数:{couter}</h2>
      <button onClick={() => setCounter(couter + 1)}>+1</button>
    </div>
  );
});

export default App;
