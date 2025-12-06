const Login = ({ myName, getData }) => {
  const abc = "World !";
  getData(abc);
  return <p>My name is {myName} </p>;
  //   return (
  //     <>
  //       <label>Email</label>
  //       <input type="email" />
  //       <label>Password</label>
  //       <input type="password" />
  //       <button>Login</button>
  //     </>
  //   );
};
export default Login;
