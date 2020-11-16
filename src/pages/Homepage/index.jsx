import React, { useState, useEffect } from "react";

import styles from "./styles.module.css";
import Modal from "../../components/Modal";
import DesktopCalendar from "../../components/DesktopCalendar";
import MobileCalendar from "../../components/MobileCalendar";

function Homepage() {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState(window.innerWidth);
  const [refresher, setRefresher] = useState(Date.now());
  const [calendarData, setCalendarData] = useState([
    {
      title: "Segunda",
      name: "monday",
      shifts: [
        { title: "morning", available: false, info: null },
        { title: "afternoon", available: false, info: null },
        { title: "night", available: false, info: null },
      ],
      available: false,
    },
    {
      title: "Terça",
      name: "tuesday",
      shifts: [
        { title: "morning", available: false, info: null },
        { title: "afternoon", available: false, info: null },
        { title: "night", available: false, info: null },
      ],
      available: false,
    },
    {
      title: "Quarta",
      name: "wednesday",
      shifts: [
        { title: "morning", available: false, info: null },
        { title: "afternoon", available: false, info: null },
        { title: "night", available: false, info: null },
      ],
      available: false,
    },
    {
      title: "Quinta",
      name: "thursday",
      shifts: [
        { title: "morning", available: false, info: null },
        { title: "afternoon", available: false, info: null },
        { title: "night", available: false, info: null },
      ],
      available: false,
    },
    {
      title: "Sexta",
      name: "friday",
      shifts: [
        { title: "morning", available: false, info: null },
        { title: "afternoon", available: false, info: null },
        { title: "night", available: false, info: null },
      ],
      available: false,
    },
    {
      title: "Sábado",
      name: "saturday",
      shifts: [
        { title: "morning", available: false, info: null },
        { title: "afternoon", available: false, info: null },
        { title: "night", available: false, info: null },
      ],
      available: false,
    },
    {
      title: "Domingo",
      name: "sunday",
      shifts: [
        { title: "morning", available: false, info: null },
        { title: "afternoon", available: false, info: null },
        { title: "night", available: false, info: null },
      ],
      available: false,
    },
  ]);

  useEffect(() => {
    (async () => {
      let response = await fetch(
        `http://localhost:3000/users/${window.location.pathname.split("/")[2]}`
      );
      let parsedResponse = await response.json();
      let auxData = calendarData;

      let events = await fetch("http://localhost:3000/events");
      let parsedEvents = await events.json();
      let userEvents = [];
      parsedEvents.forEach((event) => {
        if (event.user_id === window.location.pathname.split("/")[2]) {
          userEvents.push(event);
        }
      });

      // Sets available days
      for (let i = 0; i < auxData.length; i++) {
        for (let j = 0; j < auxData.length; j++) {
          if (auxData[i].name === parsedResponse.week_days[j]) {
            auxData[i].available = true;
          }
        }
      }

      // Sets available shifts
      for (let i = 0; i < auxData.length; i++) {
        for (let j = 0; j < auxData[i].shifts.length; j++) {
          for (let k = 0; k < parsedResponse.day_shifts.length; k++) {
            if (auxData[i].shifts[j].title === parsedResponse.day_shifts[k]) {
              auxData[i].shifts[j].available = true;
            }
          }
        }
      }

      // Sets available Events
      for (let i = 0; i < auxData.length; i++) {
        for (let j = 0; j < auxData[i].shifts.length; j++) {
          for (let k = 0; k < userEvents.length; k++) {
            if (
              auxData[i].name === userEvents[k].week_day &&
              auxData[i].shifts[j].title === userEvents[k].day_shift
            ) {
              auxData[i].shifts[j].info = userEvents[k];
            }
          }
        }
      }
      setCalendarData([...auxData]);
    })();

    window.onresize = () => {
      setSize(window.innerWidth);
    };
  }, [refresher]);

  return (
    <div className={styles.homepageContainer}>
      {isOpen && <Modal setIsOpen={setIsOpen} refresher={setRefresher} />}
      <div className={styles.createDiv}>
        <button
          className={styles.createEventBtn}
          onClick={() => setIsOpen(true)}
        >
          Novo Evento
        </button>
      </div>
      <div className={styles.calendarDiv}>
        {size >= 800 ? (
          <DesktopCalendar calendarData={calendarData} />
        ) : (
          <MobileCalendar calendarData={calendarData} />
        )}
      </div>
    </div>
  );
}

export default Homepage;
