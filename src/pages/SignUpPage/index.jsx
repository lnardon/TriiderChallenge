import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";
import bg from "../../assets/bg.jpeg";

function SignUpPage() {
  const history = useHistory();
  const [step, setStep] = useState(0);
  const [turns, setTurns] = useState([
    { name: "Manhã", checked: false },
    { name: "Tarde", checked: false },
    { name: "Noite", checked: false },
  ]);
  const [days, setDays] = useState([
    { name: "S", checked: false },
    { name: "T", checked: false },
    { name: "Q", checked: false },
    { name: "Q", checked: false },
    { name: "S", checked: false },
    { name: "S", checked: false },
    { name: "D", checked: false },
  ]);

  function checkTurn(index) {
    let aux = [...turns];
    aux[index].checked = !aux[index].checked;
    setTurns(aux);
  }

  function checkDay(index) {
    let aux = [...days];
    aux[index].checked = !aux[index].checked;
    setDays(aux);
  }

  return (
    <div className="loginPageContainer">
      <div className="left">
        <div className="filterBg"></div>
        <img src={bg} alt="BG" className="bg" />
      </div>
      <div className="right">
        {step === 0 ? (
          <div className="rightContent1">
            <h1 className="title">Criar conta</h1>
            <div className="inputDiv">
              <label htmlFor="email">Qual o seu nome?</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="inputDiv">
              <label htmlFor="email">E seu e-mail?</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="inputDiv">
              <label htmlFor="pass">Crie uma senha</label>
              <input type="password" name="pass" id="pass" />
            </div>
            <button className="nextBtn" onClick={() => setStep(1)}>
              Avançar
            </button>

            <div className="separator"></div>

            <h4 className="subText">Já possui uma conta?</h4>

            <button className="signUp" onClick={() => history.push("/login")}>
              Entrar
            </button>
          </div>
        ) : (
          <div className="rightContent2">
            <h1 className="title">Criar conta</h1>
            <div className="inputDiv">
              <label htmlFor="email">Selecione sua categoria</label>
              <select name="job" id="job">
                <option value="clown">Palhaço</option>
                <option value="magician">Mágico</option>
                <option value="uggler">Malabarista</option>
              </select>
            </div>
            <div className="inputDiv">
              <label>Selecione os dias que trabalhará</label>
              <div className="turnsDiv">
                {days.map((day, index) => {
                  return (
                    <h3
                      key={index}
                      onClick={() => checkDay(index)}
                      className={day.checked ? "dayChecked" : "dayUnchecked"}
                    >
                      {day.name}
                    </h3>
                  );
                })}
              </div>
              <div className="inputDiv">
                <label>Selecione os turnos que trabalhará</label>
                <div className="turnsDiv">
                  {turns.map((turn, index) => {
                    return (
                      <h3
                        key={index}
                        onClick={() => checkTurn(index)}
                        className={
                          turn.checked ? "turnChecked" : "turnUnchecked"
                        }
                      >
                        {turn.name}
                      </h3>
                    );
                  })}
                </div>
              </div>
              <div className="inputDiv">
                <label htmlFor="email">Informe o preço do seu serviço</label>
                <input type="number" name="price" id="price" />
              </div>
              <button
                className="nextBtn"
                onClick={() => history.push("/homepage")}
              >
                Criar Conta
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SignUpPage;
