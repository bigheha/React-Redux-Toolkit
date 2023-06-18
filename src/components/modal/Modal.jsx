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
        <textarea
          rows={5}
          cols={20}
          maxLength={300}
          placeholder="(300 chars max)"
        ></textarea>
        <div className={styles.buttons}>
          <button
            onClick={(e) => {
              const who = e.target.parentElement.parentElement.children[1];
              dispatch(addTask(who.value));
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
