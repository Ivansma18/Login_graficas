import React from "react";
import "../css/Login.css";
export const Login_1 = () => {
  return (
    <div class="login-container">
      <div class="login-logo">
        <h1>Login</h1>
      </div>
      <div class="login-form">
        <img src="./img/Logo.png" alt="Usuario" />
        <input class="login-input" type="text" />
        <input class="login-input" type="password" />
        <button class="login-button">Login</button>
      </div>
    </div>
  );
};
