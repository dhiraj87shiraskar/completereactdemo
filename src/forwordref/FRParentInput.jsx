import React, { Component } from "react";
import FRInput from "./FRInput";

export class FRParentInput extends Component {
  constructor(props) {
    super(props);
    this.parentCompInput = React.createRef();
  }

  clickHandler = () => {
    this.parentCompInput.current.focus();
  };

  render() {
    return (
      <div>
        <FRInput ref={this.parentCompInput} />
        <button onClick={this.clickHandler}>click from parent</button>
      </div>
    );
  }
}

export default FRParentInput;
