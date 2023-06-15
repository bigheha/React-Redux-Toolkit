import styles from "./addTask.module.css";

function NewTask() {
  return (
    <div className={styles.newTaskBtn}>
      <p>ADD</p>
      <p>+</p>
      <p>NEW TASK</p>
    </div>
  );
}

export default NewTask;
