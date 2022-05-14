import React, { FC } from "react";

import styles from "./Table.module.scss";

type TableProps = {
  children: React.ReactNode;
};

export const Table: FC<TableProps> = ({ children }) => {
  return <div className={styles.tableContent}>{children}</div>;
};
