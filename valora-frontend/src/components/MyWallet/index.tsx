import React from "react";
import { FiArrowDown } from "react-icons/fi";
import { Table } from "../Table";
import styles from "./MyWallet.module.scss";

export const MyWallet = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1>Buscas Recentes</h1>
        <FiArrowDown />
      </div>

      <Table />
    </div>
  );
};
