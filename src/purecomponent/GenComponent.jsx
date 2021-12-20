import React, { Component } from "react";

class GenComponent extends Component {
  render() {
    console.log("Gen component");
    return (
      <div>
        <h1>Gen componet {this.props.name}</h1>
      </div>
    );
  }
}

export default GenComponent;
