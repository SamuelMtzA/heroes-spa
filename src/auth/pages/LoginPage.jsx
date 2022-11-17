import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

  const { login } = useContext(AuthContext);
  const navigateTo = useNavigate();

  const handleLogin = () => {
    login('Samuel Mtz');
    navigateTo("/",{
      replace: true
    });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button onClick={handleLogin} className="btn btn-primary">
        Login
      </button>
    </div>
  );
};
