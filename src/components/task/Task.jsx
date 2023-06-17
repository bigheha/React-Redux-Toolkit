import styles from "./task.module.css";

export default function Task({ children }) {
  return <div className={styles.task}>{children}</div>;
}
