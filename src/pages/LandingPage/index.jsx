import React from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";
import bg from "../../assets/bg.jpeg";
import balloon from "../../assets/balloon.png";
import tada from "../../assets/tada.png";

function LandingPage() {
  const history = useHistory();
  return (
    <div className="landingPageContainer">
      <div className="left">
        <div className="filterBg"></div>
        <img src={bg} alt="BG" className="bg" />
      </div>
      <div className="right">
        <div className="rightContent">
          <h1 className="title">
            Gerenciador de eventos para animadores de festas
          </h1>
          <div className="btns">
            <button className="loginBtn" onClick={() => history.push("/login")}>
              Entrar
            </button>
            <button
              className="signUpBtn"
              onClick={() => history.push("/signup")}
            >
              Criar Conta
            </button>
          </div>

          <div className="separator"></div>

          <div className="card">
            <img src={balloon} alt="icon" className="cardIcon" />
            <h3 className="cardText">
              Cadastre suas festas e organize sua agenda!
            </h3>
          </div>

          <div className="card">
            <img src={tada} alt="icon" className="cardIcon" />
            <h3 className="cardText">
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
