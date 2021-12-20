import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetChild("Ok")}>Greet Component</button>
    </div>
  );
}

export default ChildComponent;
