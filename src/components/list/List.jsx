import styles from "./list.module.css";
import { useDispatch } from "react-redux";
import { select } from "../../features/tasks/tasksSlice";

export default function List({ children, id }) {
  const dispatch = useDispatch();
  return (
    <button className={styles.list} onClick={() => dispatch(select(id))}>
      {children}
    </button>
  );
}
