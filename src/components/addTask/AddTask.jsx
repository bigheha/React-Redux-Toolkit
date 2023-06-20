import styles from "./addTask.module.css";
import { useDispatch } from "react-redux";
import { openModal } from "../../features/taskModal/taskModalSlice";
function NewTask() {
  const dispatch = useDispatch();

  return (
    <div
      className={styles.newTaskBtn}
      onClick={() => {
        console.log("click");
        dispatch(openModal());
      }}
    >
      <p className={styles.btnText}>ADD</p>
      <p className={styles.plus}>+</p>
      <p className={styles.btnText}>NEW TASK</p>
    </div>
  );
}

export default NewTask;
