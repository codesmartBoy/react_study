import React, { PureComponent } from "react";

export class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { couter: 100 };
  }
  componentDidMount() {
    document.title = this.state.couter;
  }
  componentDidUpdate() {
    document.title = this.state.couter;
  }
  addCouter() {
    this.setState({ couter: this.state.couter + 1 });
  }
  render() {
    const { couter } = this.state;
    return (
      <div>
        <h1>Couter Page</h1>
        <h2>计数:{couter}</h2>
        <button onClick={() => this.addCouter()}>+1</button>
      </div>
    );
  }
}

export default App;
