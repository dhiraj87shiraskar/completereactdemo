import React, { Component } from "react";

class StateEx extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Guest",
    };
  }

  subscribe() {
    this.setState({ message: "Thank you for subscribe" });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.subscribe()}>Subscribe</button>
      </div>
    );
  }
}

export default StateEx;
