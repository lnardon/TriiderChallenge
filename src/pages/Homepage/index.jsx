import React, { useState, useEffect } from "react";

import styles from "./styles.module.css";
import Modal from "../../components/Modal";
import DesktopCalendar from "../../components/DesktopCalendar";
import MobileCalendar from "../../components/MobileCalendar";

function Homepage() {
  const [isOpen, setIsOpen] = useState(false);
  const [days, setDays] = useState([
    { label: "S", checked: false, name: "monday" },
    { label: "T", checked: false, name: "tuesday" },
    { label: "Q", checked: false, name: "wednesday" },
    { label: "Q", checked: false, name: "thursday" },
    { label: "S", checked: false, name: "friday" },
    { label: "S", checked: false, name: "saturday" },
    { label: "D", checked: false, name: "sunday" },
  ]);
  const [events, setEvents] = useState();
  const [shifts, setShifts] = useState([]);
  const [calendarData, setCalendarData] = useState([]);

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
        {window.innerWidth >= 800 ? (
          <DesktopCalendar calendarData={calendarData} />
        ) : (
          <MobileCalendar calendarData={calendarData} />
        )}
      </div>
    </div>
  );
}

export default Homepage;
