import React from "react";

function FunClick() {
  function clickHandler() {
    console.log("function click");
  }
  return <button onClick={clickHandler}>Function Click</button>;
}

export default FunClick;
