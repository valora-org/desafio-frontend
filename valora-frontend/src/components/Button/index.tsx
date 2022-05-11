import React, { FC } from "react";

import classNames from "classnames";
import styles from "./Button.module.scss";

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  disabled?: boolean;
  content?: string;
};

export const Button: FC<ButtonProps> = ({
  content,
  children,
  primary = true,
  secondary = false,
  tertiary = false,
  ...rest
}) => {
  const classes = classNames(styles.button, {
    [styles.primary]: primary,
    [styles.secondary]: secondary,
    [styles.tertiary]: tertiary,
    [styles.disabled]: rest.disabled,
  });

  return (
    <button className={classes} {...rest}>
      {children}
      {content}
    </button>
  );
};
