import React from "react";

import styles from "./styles.module.css";
import UnavailableSlot from "../UnavailableSlot";
import AvailableSlot from "../AvailableSlot";
import EventSlot from "../EventSlot";

function DesktopCalendar({ calendarData }) {
  return (
    <div className={styles.calendarBg}>
      <div className={styles.calendarDiv}>
        {calendarData.map((data, index) => {
          return (
            <div className={styles.dayDiv} key={index}>
              <h1 className={styles.weekDay}>{data.title}</h1>
              {data.available ? (
                data.shifts.map((shift, index) => {
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
                  <UnavailableSlot key={0} />
                  <UnavailableSlot key={1} />
                  <UnavailableSlot key={2} />
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DesktopCalendar;
