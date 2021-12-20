import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "dhiraj",
    };
    console.log("call from Lifecycle B counstructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("call from Lifecycle B getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Call from Lifecycle B componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("call from Lifecycle B shouldComponentUpdate");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("call from Lifecycle B getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("Call from Lifecycle B componentDidUpdate");
  }

  render() {
    console.log("Call from Lifecycle B render");
    return <div> Lifecycle B</div>;
  }
}

export default LifeCycleB;
