import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./styles.module.css";
import bg from "../../assets/bg.jpeg";
import balloon from "../../assets/balloon.png";
import tada from "../../assets/tada.png";

function LandingPage() {
  const history = useHistory();
  return (
    <div className={styles.landingPageContainer}>
      <div className={styles.left}>
        <div className={styles.filterBg}></div>
        <img src={bg} alt="BG" className={styles.bg} />
      </div>
      <div className={styles.right}>
        <div className={styles.rightContent}>
          <h1 className={styles.title}>
            Gerenciador de eventos para animadores de festas
          </h1>
          <div className={styles.btns}>
            <button
              className={styles.loginBtn}
              onClick={() => history.push("/login")}
            >
              Entrar
            </button>
            <button
              className={styles.signUpBtn}
              onClick={() => history.push("/signup")}
            >
              Criar Conta
            </button>
          </div>

          <div className={styles.separator}></div>

          <div className={styles.card}>
            <img src={balloon} alt="icon" className={styles.cardIcon} />
            <h3 className={styles.cardText}>
              Cadastre suas festas e organize sua agenda!
            </h3>
          </div>

          <div className={styles.card}>
            <img src={tada} alt="icon" className={styles.cardIcon} />
            <h3 className={styles.cardText}>
              Informe sua disponibilidade de dias e horários e crie um
              calendário personalizado
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
