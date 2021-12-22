import React, { Component } from "react";

export class ClassCounterOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, pervState) {
    if (pervState.count !== this.state.count) {
      console.log("componentDidUpdate");
      document.title = `Clicked ${this.state.count} times`;
    }
  }

  onChangeHandler = (e) => {
    this.setState({ name: e.target.value });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={this.onChangeHandler}
        />
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Click {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassCounterOne;
