import React, { useState } from "react";

import styles from "./styles.module.css";
import UnavailableSlot from "../UnavailableSlot";
import AvailableSlot from "../AvailableSlot";
import EventSlot from "../EventSlot";

import left from "../../assets/leftArrow.svg";
import right from "../../assets/rightArrow.svg";

function MobileCalendar({ calendarData }) {
  const [currentDay, setCurrentDay] = useState(0);

  function previousDay() {
    if (currentDay > 0) {
      setCurrentDay(currentDay - 1);
    }
  }

  function nextDay() {
    if (currentDay < 6) {
      setCurrentDay(currentDay + 1);
    }
  }

  return (
    <div className={styles.mobileCalendarContainer}>
      <h1 className={styles.title}>{calendarData[currentDay].title}</h1>
      <div className={styles.calendarDay}>
        {calendarData[currentDay].available ? (
          calendarData[currentDay].shifts.map((shift, index) => {
            return shift.available ? (
              shift.info ? (
                <EventSlot
                  key={index}
                  name={shift.info.name}
                  address={shift.info.address}
                />
              ) : (
                <AvailableSlot key={index} />
              )
            ) : (
              <UnavailableSlot key={index} />
            );
          })
        ) : (
          <>
            <UnavailableSlot />
            <UnavailableSlot />
            <UnavailableSlot />
          </>
        )}
      </div>
      <div className={styles.btnsDiv}>
        <img
          src={left}
          alt="back"
          className={styles.arrow}
          onClick={previousDay}
        />
        <img
          src={right}
          alt="next"
          className={styles.arrow}
          onClick={nextDay}
        />
      </div>
    </div>
  );
}

export default MobileCalendar;
