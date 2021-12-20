import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }

  greetParent = (ok) => {
    console.log(`Hello ${this.state.parentName} ${ok}`);
  };

  render() {
    return (
      <div>
        <ChildComponent greetChild={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;
