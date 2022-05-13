import React, { FC } from "react";
import { Button } from "../Button";

import styles from "./Table.module.scss";
import { TableCell } from "./TableCell";
import { TableRow } from "./TableRow";

type TableProps = {
  children: React.ReactNode;
};

export const Table: FC<TableProps> = ({ children }) => {
  return <div className={styles.tableContent}>{children}</div>;
};
