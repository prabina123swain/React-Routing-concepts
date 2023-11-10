import Template from "../components/Templaet";
import loginImg from "../assets/login.png";

function Login({ setIsLoggedIn }) {
  return (
    <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={loginImg}
      formtype="Login"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default Login;
