import styles from "./list.module.css";
import { useDispatch } from "react-redux";
import { select, deleteList } from "../../features/tasks/tasksSlice";

export default function List({ children, id }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.list}>
      <button className={styles.listBtn} onClick={() => dispatch(select(id))}>
        {children}
      </button>
      <button
        onClick={(e) => {
          const target = e.target.parentElement.firstChild.innerText;
          dispatch(deleteList(target));
        }}
      >
        delete
      </button>
    </div>
  );
}
