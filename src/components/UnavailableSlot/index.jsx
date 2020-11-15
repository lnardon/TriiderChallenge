import React from "react";

import styles from "./styles.module.css";

function UnavailableSlot() {
  return (
    <div className={styles.unavailableSlotContainer}>
      <h1 className={styles.title}> NÃO DISPONÍVEL</h1>
    </div>
  );
}

export default UnavailableSlot;
