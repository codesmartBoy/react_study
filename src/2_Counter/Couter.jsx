import React, { PureComponent } from "react";

export class Couter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { couter: 0 };
  }

  subCouter() {
    this.setState({ couter: this.state.couter - 1 });
  }
  addCouter() {
    this.setState({ couter: this.state.couter + 1 });
  }
  render() {
    const { couter } = this.state;
    return (
      <div>
        <h1>当前计数:{couter}</h1>
        <button onClick={() => this.subCouter()}>-1</button>
        <button onClick={() => this.addCouter()}>+1</button>
      </div>
    );
  }
}

export default Couter;
