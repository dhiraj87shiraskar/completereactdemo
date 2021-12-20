import React, { Component } from "react";
import GenComponent from "./GenComponent";
import MemoComponent from "./MemoComponent";
import PureComponent1 from "./PureComponent1";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "dhiraj",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "dhiraj" });
    }, 3000);
  }

  render() {
    console.log("Parent component");
    return (
      <div>
        <h1>Parent componet {this.state.name}</h1>
        {/* <GenComponent name={this.state.name} />
        <PureComponent1 name={this.state.name} /> */}
        <MemoComponent name={this.state.name} />
      </div>
    );
  }
}

export default ParentComponent;
