import styles from "./modal.module.css";
import { useDispatch } from "react-redux";
import { closeModal } from "../../features/modal/modalSlice";
import { addTask } from "../../features/tasks/tasksSlice";

export default function Modal() {
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.modalBox}>
        <p className={styles.title}>Describe your task</p>
        <textarea rows={10} cols={35}></textarea>
        <div className={styles.buttons}>
          <button
            onClick={() => {
              dispatch(addTask("heehee"));
              dispatch(closeModal());
            }}
          >
            add
          </button>
          <button
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            close
          </button>
        </div>
      </div>
    </>
  );
}
