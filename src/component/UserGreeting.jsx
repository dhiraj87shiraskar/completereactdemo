import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isUserLoggedIn: false,
    };
  }

  render() {
    return this.state.isUserLoggedIn && <div>Welcome Dhiraj</div>;
  }
}

export default UserGreeting;
