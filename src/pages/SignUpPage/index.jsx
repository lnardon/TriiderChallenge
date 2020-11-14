import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import styles from "./styles.module.css";
import bg from "../../assets/bg.jpeg";

function SignUpPage() {
  const history = useHistory();
  const [step, setStep] = useState(0);
  const [day_shifts, setDay_shifts] = useState([
    { label: "Manhã", checked: false, name: "morning" },
    { label: "Tarde", checked: false, name: "afternoon" },
    { label: "Noite", checked: false, name: "night" },
  ]);
  const [week_days, setWeek_days] = useState([
    { label: "S", checked: false, name: "monday" },
    { label: "T", checked: false, name: "tuesday" },
    { label: "Q", checked: false, name: "wednesday" },
    { label: "Q", checked: false, name: "thursday" },
    { label: "S", checked: false, name: "friday" },
    { label: "S", checked: false, name: "saturday" },
    { label: "D", checked: false, name: "sunday" },
  ]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("Magician");
  const [price, setPrice] = useState();

  function checkTurn(index) {
    let aux = [...day_shifts];
    aux[index].checked = !aux[index].checked;
    setDay_shifts(aux);
  }

  function checkDay(index) {
    let aux = [...week_days];
    aux[index].checked = !aux[index].checked;
    setWeek_days(aux);
  }

  async function createUser() {
    let days = week_days.filter((d) => d.checked);
    let shifts = day_shifts.filter((d) => d.checked);

    let response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        category: category,
        week_days: days,
        day_shifts: shifts,
        price: price,
      }),
    });
    if (response.status === 201) {
      let parsed = await response.json();
      let id = parsed.id;
      history.push(`/homepage/${id}`);
    } else {
      alert("Erro ao criar usuario");
      window.location.reload();
    }
  }

  return (
    <div className={styles.loginPageContainer}>
      <div className={styles.left}>
        <div className={styles.filterBg}></div>
        <img src={bg} alt="BG" className={styles.bg} />
      </div>
      <div className={styles.right}>
        {step === 0 ? (
          <div className={styles.rightContent1}>
            <h1 className={styles.title}>Criar conta</h1>
            <div className={styles.mobileSignUp}>
              <div className={styles.inputDiv}>
                <label htmlFor="email">Qual o seu nome?</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={styles.inputDiv}>
                <label htmlFor="email">E seu e-mail?</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.inputDiv}>
                <label htmlFor="pass">Crie uma senha</label>
                <input
                  type="password"
                  name="pass"
                  id="pass"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className={styles.nextBtn} onClick={() => setStep(1)}>
                Avançar
              </button>

              <div className={styles.separator}></div>

              <h4 className={styles.subText}>Já possui uma conta?</h4>

              <button
                className={styles.signUp}
                onClick={() => history.push("/login")}
              >
                Entrar
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.rightContent2}>
            <h1 className={styles.title}>Criar conta</h1>
            <div className={styles.mobileSignUp}>
              <div className={styles.inputDiv}>
                <label htmlFor="email">Selecione sua categoria</label>
                <select
                  name="job"
                  className={styles.job}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="clown">Palhaço</option>
                  <option value="magician">Mágico</option>
                  <option value="juggler">Malabarista</option>
                </select>
              </div>
              <div className={styles.inputDiv}>
                <label>Selecione os dias que trabalhará</label>
                <div className={styles.turnsDiv}>
                  {week_days.map((day, index) => {
                    return (
                      <h3
                        key={index}
                        onClick={() => checkDay(index)}
                        className={
                          day.checked ? styles.dayChecked : styles.dayUnchecked
                        }
                      >
                        {day.label}
                      </h3>
                    );
                  })}
                </div>
                <div className={styles.inputDiv}>
                  <label>Selecione os turnos que trabalhará</label>
                  <div className={styles.turnsDiv}>
                    {day_shifts.map((turn, index) => {
                      return (
                        <h3
                          key={index}
                          onClick={() => checkTurn(index)}
                          className={
                            turn.checked
                              ? styles.turnChecked
                              : styles.turnUnchecked
                          }
                        >
                          {turn.label}
                        </h3>
                      );
                    })}
                  </div>
                </div>
                <div className={styles.inputDiv}>
                  <label htmlFor="email">Informe o preço do seu serviço</label>
                  <input
                    type="number"
                    name="price"
                    className={styles.job}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <button className={styles.nextBtn} onClick={createUser}>
                  Criar Conta
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SignUpPage;
