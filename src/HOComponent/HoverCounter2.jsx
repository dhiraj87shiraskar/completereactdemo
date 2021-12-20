import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

class HoverCounter extends Component {
  render() {
    console.log(this.props);
    const { count, incrementCount } = this.props;
    return <button onMouseOver={incrementCount}>Click {count} times</button>;
  }
}

export default UpdatedComponent(HoverCounter);
