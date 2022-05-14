import { FC, InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

type InputProps = {} & InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<InputProps> = (rest) => {
  return <input {...rest} className={styles.inputContainer} />;
};
