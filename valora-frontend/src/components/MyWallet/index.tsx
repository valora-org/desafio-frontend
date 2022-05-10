import React from "react";
import { FiArrowDown } from "react-icons/fi";
import { Table } from "../Table";
import styles from "./MyWallet.module.scss";

export const MyWallet = () => {
  return (
    <div>
      <div
        style={{
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Buscas Recentes</h1>
        <FiArrowDown />
      </div>

      <Table />
    </div>
  );
};
