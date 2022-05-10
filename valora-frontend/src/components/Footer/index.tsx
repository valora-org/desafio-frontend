import React from "react";
import styles from "./Footer.module.scss";

import { FaCopyright } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <span className={styles.footerIcon}>
        <FaCopyright />
      </span>
      <span>Valora</span>
    </div>
  );
};
