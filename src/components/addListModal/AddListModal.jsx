import styles from "./addlistmodal.module.css";
import { useDispatch } from "react-redux";
import { closeListModal } from "../../features/listModal/listModalSlice";
import { addList } from "../../features/tasks/tasksSlice";
import { useState } from "react";

export default function AddListModal() {
  const dispatch = useDispatch();
  const [listValue, setListValue] = useState("");

  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.modalBox}>
        <p>New list name:</p>
        <input
          type="text"
          onChange={(e) => setListValue(e.target.value)}
        ></input>
        <div className={styles.buttons}>
          <button
            onClick={(e) => {
              dispatch(addList(listValue));
              dispatch(closeListModal());
            }}
          >
            add
          </button>
          <button
            onClick={() => {
              dispatch(closeListModal());
            }}
          >
            close
          </button>
        </div>
      </div>
    </>
  );
}
