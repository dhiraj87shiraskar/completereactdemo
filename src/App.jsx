import React, { Component, useReducer } from "react";
import ClassCounterOne from "./hooks/ClassCounterOne";
import ClassMouse from "./hooks/ClassMouse";
import ComponentA from "./hooks/ComponentA";
import ComponentB from "./hooks/ComponentB";
import ComponentC from "./hooks/ComponentC";
import DataFetching from "./hooks/DataFetching";
import DataFetchingOne from "./hooks/DataFetchingOne";
import DataFetchingTwo from "./hooks/DataFetchingTwo";
import HookCounter from "./hooks/HookCounter";
import HookMouse from "./hooks/HookMouse";
import MouseContainer from "./hooks/MouseContainer";
import ReducerCounterOne from "./hooks/ReducerCounterOne";
import ReducerCounterThree from "./hooks/ReducerCounterThree";
import ReducerCounterTwo from "./hooks/ReducerCounterTwo";
// import ComponentC from "./contextDemo/ComponentC";
// import PostList from "./https/PostList";
// import { UserProvider } from "./userContext";
// import "./App.css";
// import PostForm from "./https/PostForm";
// import HookUseStateCounter from "./hooks/HookUseStateCounter";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const CountContext = React.createContext();

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {/* <UserProvider value="Dhiraj">
          <ComponentC />
        </UserProvider> */}
      {/* <PostList /> */}
      {/* <PostForm /> */}\{/* <HookUseStateCounter /> */}
      {/* <ClassCounterOne /> */}
      {/* <HookCounter /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <DataFetching /> */}
      {/* <ReducerCounterOne /> */}
      {/* <ReducerCounterTwo /> */}
      {/* <ReducerCounterThree /> */}
      {/* <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <h1>Count - {count}</h1>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider> */}
      {/* <DataFetchingOne /> */}
      <DataFetchingTwo />
    </div>
  );
}

export default App;
