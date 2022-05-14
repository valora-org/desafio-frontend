import Image from "next/image";
import React from "react";
import styles from "./AppBar.module.scss";
import { FiMenu } from "react-icons/fi";

export const AppBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.navWrapper}>
          <div className={styles.menu}>
            <FiMenu size={32} color={"white"} />
          </div>
        </div>
        <div className={styles.navWrapper}>
          <div className={styles.profileSection}>
            <div className={styles.profileSectionName}>JOHN DOE</div>
            <div className={styles.profileSectionJob}>Desenvolvedor</div>
          </div>
          <Image
            src={"https://i.pravatar.cc/300"}
            layout="fixed"
            alt="Avatar"
            className={styles.avatar}
            width={"50px"}
            height={"50px"}
          />
        </div>
      </div>
    </nav>
  );
};
