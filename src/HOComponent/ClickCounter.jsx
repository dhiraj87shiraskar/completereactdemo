import React, { Component } from "react";

class ClickCounter extends Component {
  render() {
    console.log(this.props);
    const { count, incrementCount } = this.props;
    return <button onClick={incrementCount}>Click {count} times</button>;
  }
}
export default ClickCounter;
