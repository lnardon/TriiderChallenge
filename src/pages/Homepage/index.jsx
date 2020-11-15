import React, { useState, useEffect } from "react";

import styles from "./styles.module.css";
import Modal from "../../components/Modal";

function Homepage() {
  const [isOpen, setIsOpen] = useState(false);
  const [days, setDays] = useState();
  const [events, setEvents] = useState();

  useEffect(() => {
    (async () => {
      let response = await fetch("http://localhost:3000/events");
      let parsedResponse = await response.json();
      let events = [];
      parsedResponse.forEach((event) => {
        if (event.user_id === window.location.pathname.split("/")[2]) {
          events.push(event);
        }
      });
      setEvents(events);
    })();
  }, []);

  return (
    <div className={styles.homepageContainer}>
      {isOpen && <Modal setIsOpen={setIsOpen} />}

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
