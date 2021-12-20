import React, { Component } from "react";

class SetStateEx11 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    // this.IncrementFive = this.IncrementFive.bind(this);
  }

  Increment() {
    // this.setState(
    //   {
    //     counter: this.state.counter + 1,
    //   },
    //   () => console.log("Callback value - ", this.state.counter)
    // );
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
    console.log(this.state.counter);
  }

  IncrementFive = () => {
    console.log(this);
    // this.Increment();
    // this.Increment();
    // this.Increment();
    // this.Increment();
    // this.Increment();
  };

  render() {
    return (
      <div>
        <h1>Count - {this.state.counter}</h1>
        <button onClick={this.IncrementFive}> Increment </button>
      </div>
    );
  }
}

export default SetStateEx11;
