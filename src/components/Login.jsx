import axios from "axios";
import { useState } from "react";

const Login = ({ myName, getData }) => {
  const abc = "World !";
  getData(abc);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const inputChangeHandler = ({ target }) => {
    const { name, value } = target;
    setUserData({ ...userData, [name]: value });
  };
  const loginHandler = async () => {
    const res = await axios.post("http://127.0.0.1:1234/user/signin", userData);
    console.log(res);
    setUserData({
      email: "",
      password: "",
    });
  };
  //   return <p>My name is {myName} </p>;
  return (
    <>
      <label>Email</label>
      <input
        type="email"
        name="email"
        onChange={inputChangeHandler}
        value={userData.email}
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        onChange={inputChangeHandler}
        value={userData.password}
      />
      <button onClick={loginHandler}>Login</button>
    </>
  );
};
export default Login;
