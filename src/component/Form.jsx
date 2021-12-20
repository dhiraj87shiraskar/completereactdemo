import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "",
    };
  }
  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlecommentsChange = (event) => {
    this.setState({ comments: event.target.value });
  };

  handleSelectchange = (event) => {
    this.setState({ topic: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    const { username, topic, comments } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <h1>Input</h1>
          <input
            type="text"
            value={username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <h1>Comments</h1>
          <textarea
            value={comments}
            onChange={this.handlecommentsChange}
          ></textarea>
        </div>
        <div>
          <h1>Select Lang</h1>
          <select value={topic} onChange={this.handleSelectchange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vie">vie</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
