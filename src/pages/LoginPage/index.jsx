import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./styles.module.css";
import bg from "../../assets/bg.jpeg";

function LoginPage() {
  const history = useHistory();

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
              <input type="email" name="email" id="email" />
            </div>
            <div className={styles.inputDiv}>
              <label htmlFor="pass">Senha</label>
              <input type="password" name="pass" id="pass" />
            </div>
            <button
              className={styles.login}
              onClick={() => history.push("/homepage")}
            >
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
