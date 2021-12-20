import React, { Component } from "react";
import ComponentE from "./ComponentE";

export class ComponentC extends Component {
  render() {
    return (
      <div className="App">
        <ComponentE />
      </div>
    );
  }
}

export default ComponentC;
