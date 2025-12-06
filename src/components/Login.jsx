const Login = ({ myName, getData }) => {
  const abc = "World !";
  getData(abc);
  return <p>My name is {myName} </p>;
};
export default Login;
