import React, { Component } from "react";

export class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.cbRef = null;
    this.setcbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    // this.inputRef.current.focus();
    this.cbRef.focus();
  }

  clickHandler = () => {
    console.log(this.cbRef.value);
    // this.inputRef.current.value = "";
  };

  render() {
    return (
      <div>
        <br />
        <br />
        Userinput:
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setcbRef} />
        <button onClick={this.clickHandler}>Submit</button>
      </div>
    );
  }
}

export default RefsDemo;
