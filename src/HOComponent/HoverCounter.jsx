import React, { Component } from "react";

class HoverCounter extends Component {
  render() {
    console.log(this.props);
    const { count, incrementCount } = this.props;
    return <button onMouseOver={incrementCount}>Click {count} times</button>;
  }
}

export default HoverCounter;
