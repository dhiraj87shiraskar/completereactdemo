import React, { Component } from "react";
import ComponentC from "./contextDemo/ComponentC";
import { UserProvider } from "./userContext";

export class App extends Component {
  render() {
    return (
      <div>
        <UserProvider value="Dhiraj">
          <ComponentC />
        </UserProvider>
      </div>
    );
  }
}

export default App;
