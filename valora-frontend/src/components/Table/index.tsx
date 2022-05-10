import React from "react";
import { Button } from "../Button";

import styles from "./Table.module.scss";

export const Table = () => {
  return (
    <div className={styles.tableContent}>
      <div className={styles.tableRow}>
        <div className={styles.tableCell}>Apple Inc. (AAPL)</div>
        <div className={styles.tableCell}>
          <div>R$ 227.27</div>
          <div>Abertura</div>
        </div>
        <div className={styles.tableCell}>
          <div>R$ 227.27</div>
          <div>Fechamento</div>
        </div>
        <div className={styles.tableCell}>
          <Button content="Adicionar" primary />
          <Button content="Remover" secondary />
        </div>
      </div>

      <div className={styles.tableRow}>
        <div className={styles.tableCell}>Amazon.com, Inc (AMZN)</div>
        <div className={styles.tableCell}>
          <div>R$ 227.27</div>
          <div>Abertura</div>
        </div>
        <div className={styles.tableCell}>
          <div>R$ 227.27</div>
          <div>Fechamento</div>
        </div>
        <div className={styles.tableCell}>
          <Button content="Adicionar" primary />
          <Button content="Remover" secondary />
        </div>
      </div>

      <div className={styles.tableRow}>
        <div className={styles.tableCell}>Alphabet Inc. (GOOG)</div>
        <div className={styles.tableCell}>
          <div>R$ 227.27</div>
          <div>Abertura</div>
        </div>
        <div className={styles.tableCell}>
          <div>R$ 227.27</div>
          <div>Fechamento</div>
        </div>
        <div className={styles.tableCell}>
          <Button content="Adicionar" primary />
          <Button content="Remover" secondary />
        </div>
      </div>
    </div>
  );
};
