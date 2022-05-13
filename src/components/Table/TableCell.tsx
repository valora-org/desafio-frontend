import React, { FC } from "react";
import styles from "./Table.module.scss";

type TableCellProps = {
  children: React.ReactNode;
  direction?: "row" | "column";
};

export const TableCell: FC<TableCellProps> = ({
  children,
  direction = "column",
}) => {
  return (
    <div className={styles.tableCell} style={{ flexDirection: direction }}>
      {children}
    </div>
  );
};
