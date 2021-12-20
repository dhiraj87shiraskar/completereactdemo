import React from "react";

function Hero({ name }) {
  if (name === "joker") {
    throw new Error("Not a hero");
  }
  return <div>I am not hearo</div>;
}

export default Hero;
