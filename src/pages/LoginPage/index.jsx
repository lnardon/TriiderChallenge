import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import styles from "./styles.module.css";
import bg from "../../assets/bg.jpeg";

function LoginPage() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    let users = await fetch("http://localhost:3000/users");
    let parsedUsers = await users.json();
    let hasUser = false;
    parsedUsers.forEach((user) => {
      if (user.email === email && user.password === password) {
        history.push(`/homepage/${user.id}`);
        return;
      }
    });
    if (hasUser) {
      alert("Usuario inexistente");
    }
  }

  return (
    <div className={styles.loginPageContainer}>
      <div className={styles.left}>
        <div className={styles.filterBg}></div>
        <img src={bg} alt="BG" className={styles.bg} />
      </div>
      <div className={styles.right}>
        <div className={styles.rightContent}>
          <h1 className={styles.title}>Login</h1>
          <div className={styles.mobileLogin}>
            <div className={styles.inputDiv}>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.inputDiv}>
              <label htmlFor="pass">Senha</label>
              <input
                type="password"
                name="pass"
                id="pass"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className={styles.login} onClick={login}>
              Entrar
            </button>

            <a href="/" className={styles.forgotPass}>
              Esqueci minha senha
            </a>

            <div className={styles.separator}></div>

            <h4 className={styles.subText}>Não possui uma conta?</h4>

            <button
              className={styles.signUp}
              onClick={() => history.push("/signup")}
            >
              Criar Conta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
