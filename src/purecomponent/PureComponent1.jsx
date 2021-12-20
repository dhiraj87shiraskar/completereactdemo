import React, { PureComponent } from "react";

class PureComponent1 extends PureComponent {
  render() {
    console.log("Pure component");
    return (
      <div>
        <h1>pure componet {this.props.name}</h1>
      </div>
    );
  }
}

export default PureComponent1;
