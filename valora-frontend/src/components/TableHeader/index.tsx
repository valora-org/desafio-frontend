import React, { FC } from "react";

import styles from "./TableHeader.module.scss";

type TableHeaderProps = {
  title: string;
  children: React.ReactNode;
};

export const TableHeader: FC<TableHeaderProps> = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.icon}>{children}</div>
    </div>
  );
};
