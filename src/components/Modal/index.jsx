import React, { useState } from "react";

import styles from "./styles.module.css";
import closeIcon from "../../assets/close.svg";

function Modal({ setIsOpen }) {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [day, setDay] = useState("");
  const [shift, setShift] = useState("");

  async function addEvent() {
    let respose = await fetch("http://localhost:3000/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: window.location.pathname.split("/")[2],
        name: name,
        week_day: day,
        day_shift: shift,
        address: place,
      }),
    });

    if (respose.status === 201) {
      setIsOpen(false);
      alert("Evento criado");
    } else {
      alert("Erro ao criar evento");
    }
  }

  return (
    <div className={styles.modalBg}>
      <div className={styles.modalContent}>
        <h1 className={styles.modalTitle}>Cadastrar evento</h1>
        <div className={styles.inputDiv}>
          <label htmlFor="name">Nome do evento</label>
          <img
            src={closeIcon}
            alt="Close"
            onClick={() => setIsOpen(false)}
            className={styles.closeBtn}
          />
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.inputDiv}>
          <label htmlFor="place">Local</label>
          <input
            type="text"
            name="place"
            id="place"
            onChange={(e) => setPlace(e.target.value)}
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            boxSizing: "border-box",
          }}
        >
          <div
            className={styles.inputDiv}
            style={{ marginRight: "1rem", width: "50%" }}
          >
            <label htmlFor="date">Data</label>
            <select
              type="text"
              name="date"
              id="date"
              onChange={(e) => setDay(e.target.value)}
            >
              <option value="monday">Segunda</option>
              <option value="tuesday">Terça</option>
              <option value="wednesday">Quarta</option>
              <option value="thursday">Quinta</option>
              <option value="friday">Sexta</option>
              <option value="saturday">Sabado</option>
              <option value="sunday">Domingo</option>
            </select>
          </div>
          <div className={styles.inputDiv} style={{ width: "50%" }}>
            <label htmlFor="shift">Turno</label>
            <select
              type="text"
              name="shift"
              id="shift"
              onChange={(e) => setShift(e.target.value)}
            >
              <option value="morning">Manhã</option>
              <option value="afternoon">Tarde</option>
              <option value="night">Noite</option>
            </select>
          </div>
        </div>

        <button className={styles.createBtn} onClick={addEvent}>
          Adicionar evento
        </button>
      </div>
    </div>
  );
}

export default Modal;
