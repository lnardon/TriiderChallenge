import React from "react";

import styles from "./styles.module.css";
import UnavailableSlot from "../UnavailableSlot";
import EventSlot from "../EventSlot";

function MobileCalendar() {
  return (
    <div className={styles.mobileCalendarContainer}>
      <h1 className={styles.title}>22 de novembro</h1>
      <div className={styles.calendarDay}>
        <EventSlot name={"TESTE"} address={"Rua 2"} />
        <UnavailableSlot />
        <UnavailableSlot />
      </div>
    </div>
  );
}

export default MobileCalendar;
