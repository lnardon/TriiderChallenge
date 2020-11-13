import React from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";
import bg from "../../assets/bg.jpeg";

function LoginPage() {
  const history = useHistory();
  return (
    <div className="loginPageContainer">
      <div className="left">
        <div className="filterBg"></div>
        <img src={bg} alt="BG" className="bg" />
      </div>
      <div className="right">
        <div className="rightContent">
          <h1 className="title">Login</h1>
          <div className="inputDiv">
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="inputDiv">
            <label htmlFor="pass">Senha</label>
            <input type="password" name="pass" id="pass" />
          </div>
          <button className="login" onClick={() => history.push("/homepage")}>
            Entrar
          </button>

          <a href="/" className="forgotPass">
            Esqueci minha senha
          </a>

          <div className="separator"></div>

          <h4 className="subText">Não possui uma conta?</h4>

          <button className="signUp" onClick={() => history.push("/signup")}>
            Criar Conta
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
