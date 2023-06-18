import styles from "./task.module.css";
import { useDispatch } from "react-redux";
import { removeTask } from "../../features/tasks/tasksSlice";

export default function Task({ children }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.task}>
      <p className={styles.text}>{children}</p>
      <button
        className={styles.taskBtn}
        onClick={() => {
          dispatch(removeTask(children));
        }}
      >
        delete
      </button>
    </div>
  );
}
