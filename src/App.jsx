import React from "react";
import Login from "./components/Login";

const App = () => {
  const myName = "Firas";
  const getData = (data) => {
    console.log(data);
  };
  return (
    <>
      <h1>Hello, ...... </h1>
      <Login myName={myName} getData={getData} />
    </>
  );
};
export default App;
