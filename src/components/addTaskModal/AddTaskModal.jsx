import styles from "./modal.module.css";
import { useDispatch } from "react-redux";
import { closeModal } from "../../features/taskModal/taskModalSlice";
import { addTask } from "../../features/tasks/tasksSlice";
import { useState } from "react";

export default function AddTaskModal() {
  const dispatch = useDispatch();
  const [taskValue, setTaskValue] = useState("");

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
          onChange={(e) => {
            setTaskValue(e.target.value);
          }}
        ></textarea>
        <div className={styles.buttons}>
          <button
            onClick={(e) => {
              dispatch(addTask(taskValue));
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
