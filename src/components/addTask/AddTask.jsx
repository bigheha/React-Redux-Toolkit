import styles from "./addTask.module.css";

function NewTask() {
  return (
    <div className={styles.newTaskBtn}>
      <p className={styles.btnText}>ADD</p>
      <p className={styles.plus}>+</p>
      <p className={styles.btnText}>NEW TASK</p>
    </div>
  );
}

export default NewTask;
