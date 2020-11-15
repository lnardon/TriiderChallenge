import React from "react";

import styles from "./styles.module.css";

function EventSlot({ name, address }) {
  return (
    <div className={styles.eventSlotContainer}>
      <h1 className={styles.eventName}>{name}</h1>
      <h3 className={styles.eventAddress}>{address}</h3>
    </div>
  );
}

export default EventSlot;
