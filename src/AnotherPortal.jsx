import React from "react";
import ReactDOM from "react-dom";

function AnotherPortal() {
  return ReactDOM.createPortal(
    <div>
      <h1>Another portal</h1>
    </div>,
    document.getElementById("another-root")
  );
}

export default AnotherPortal;
