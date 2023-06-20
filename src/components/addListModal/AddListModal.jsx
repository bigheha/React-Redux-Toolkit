import styles from "./addlistmodal.module.css";
import { useDispatch } from "react-redux";
import { closeListModal } from "../../features/listModal/listModalSlice";
import { addList } from "../../features/tasks/tasksSlice";

export default function AddListModal() {
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.modalBox}>
        <p>New list name:</p>
        <input type="text"></input>
        <div className={styles.buttons}>
          <button
            onClick={(e) => {
              const target =
                e.target.parentElement.parentElement.children[1].value;
              dispatch(addList(target));
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
