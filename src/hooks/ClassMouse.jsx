import React, { Component } from "react";

export class ClassMouse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }

  logMousePossition = (e) => {
    this.setState({ x: e.clientX, y: e.clientY });
  };

  componentDidMount() {
    console.log("componentDidMount");
    window.addEventListener("mousemove", this.logMousePossition);
  }
  componentWillUnmount() {
    window.removeEventListener("mousemove", this.logMousePossition);
  }

  render() {
    return (
      <div>
        <h1>
          {" "}
          X - {this.state.x} Y - {this.state.y}
        </h1>
      </div>
    );
  }
}

export default ClassMouse;
