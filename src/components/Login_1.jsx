import React from "react";
import "../css/Login.css";
import { useNavigate } from "react-router-dom";
import userImg from "../img/icon.jpg";
export const Login_1 = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <div className="contededor">
        <div className="login-container">
          <div className="login-logo">
            <h1>Login</h1>
          </div>
          <div className="login-form">
            <div className="login-icon"><img src={userImg} className="login-icon" alt="Usuario" /></div>
            <div className="div-inputs">
              <input className="login-input" type="text" />
              <input className="login-input" type="password" />
            </div>

            <button className="login-button" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
        <div className="login-info">
          <input type="checkbox" /> <span>Recuerdame</span>
          <a href="#">Olvide mi contraseña</a>
        </div>
      </div>
    </>
  );
};
