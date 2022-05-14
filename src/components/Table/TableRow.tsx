import React, { FC } from "react";
import styles from "./Table.module.scss";
type TableRowProps = {
  children: React.ReactNode;
  rows?: number;
};

export const TableRow: FC<TableRowProps> = ({ children, rows = 4 }) => {
  return (
    <div
      className={styles.tableRow}
      style={{ gridTemplateColumns: `repeat(${rows}, 1fr)` }}
    >
      {children}
    </div>
  );
};
