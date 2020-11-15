import React, { useState, useEffect } from "react";

import styles from "./styles.module.css";
import closeIcon from "../../assets/close.svg";

function Homepage() {
  const [days, setDays] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [day, setDay] = useState("");
  const [shift, setShift] = useState("");

  return (
    <div className={styles.homepageContainer}>
      {isOpen ? (
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
              }}
            >
              <div className={styles.inputDiv}>
                <label htmlFor="date">Data</label>
                <input
                  type="text"
                  name="date"
                  id="date"
                  onChange={(e) => setDay(e.target.value)}
                />
              </div>
              <div className={styles.inputDiv}>
                <label htmlFor="shift">Turno</label>
                <input
                  type="text"
                  name="shift"
                  id="shift"
                  onChange={(e) => setShift(e.target.value)}
                />
              </div>
            </div>

            <button className={styles.createBtn}>Adicionar evento</button>
          </div>
        </div>
      ) : null}

      <div className={styles.createDiv}>
        <button
          className={styles.createEventBtn}
          onClick={() => setIsOpen(true)}
        >
          Novo Evento
        </button>
      </div>
      <div className={styles.calendarDiv}>
        <div className={styles.calendarBg}></div>
      </div>
    </div>
  );
}

export default Homepage;
