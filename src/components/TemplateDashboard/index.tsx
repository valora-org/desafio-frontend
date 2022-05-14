import React, { FC } from "react";
import { AppBar } from "../AppBar";
import { Footer } from "../Footer";
import { Sidebar } from "../Sidebar";

import styles from "./TemplateDashboard.module.scss";

type TemplateDashboardProps = {
  children: React.ReactNode;
};

export const TemplateDashboard: FC<TemplateDashboardProps> = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Sidebar />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};
