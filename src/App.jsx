import React, { useState } from "react";
import Login from "./components/Login";

const App = () => {
  const myName = "Firas";
  const [x, setX] = useState("");
  const getData = (data) => {
    setX(data);
  };
  return (
    <>
      {/* <h1>Hello, {x} </h1> */}
      <Login myName={myName} getData={getData} />
    </>
  );
};
export default App;
