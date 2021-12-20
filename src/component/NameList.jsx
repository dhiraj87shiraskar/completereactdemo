import React from "react";
import Person from "./Person";

function NameList() {
  const nameList = ["Dhiraj", "Suraj", "Miraj"];
  return nameList.map((name) => <Person name={name} />);
}

export default NameList;
