import React, { PureComponent } from "react";

export class HelloWorld extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello world",
    };
  }
  changeText() {
    this.setState({
      message: "你好呀",
    });
  }
  render() {
    const { message } = this.state;
    return (
      <div>
        <h1>HelloWorld:{message}</h1>
        <button onClick={(e) => this.changeText()}>修改文本</button>
      </div>
    );
  }
}

function HelloWorld2() {
  let message = "Hello Worlds";

  // 函数组件的缺陷
  // 组件不知道要重新渲染
  // 如果重新渲染  message还是会重置为初始值

  return (
    <div>
      <h2>内容2:{message} </h2>
      <button onClick={(e) => (message = "你好")}>修改文本</button>
    </div>
  );
}

export class App extends PureComponent {
  render() {
    return (
      <div>
        <HelloWorld />
        <hr />
        <HelloWorld2 />
      </div>
    );
  }
}

export default App;
