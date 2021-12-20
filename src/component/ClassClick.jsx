import React, { Component } from "react";

export class ClassClick extends Component {
  clickHandler() {
    console.log("Class button is clicked");
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Class Button</button>
      </div>
    );
  }
}

export default ClassClick;
