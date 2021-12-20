import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "dhiraj",
    };
    console.log("call from counstructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("call from getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate() {
    console.log("call from shouldComponentUpdate");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("call from getSnapshotBeforeUpdate");
    return null;
  }

  componentDidMount() {
    console.log("Call from componentDidMount");
  }

  componentDidUpdate() {
    console.log("Call from componentDidUpdate");
  }

  changeState = () => {
    this.setState({ name: "Paglu" });
  };
  render() {
    console.log("Call from render");
    return (
      <>
        <h1>Lifecycle A</h1>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB />
      </>
    );
  }
}

export default LifeCycleA;
