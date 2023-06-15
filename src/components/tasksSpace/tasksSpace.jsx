import styles from "./tasksSpace.module.css";
import AddTask from "../addTask/AddTask";

function TasksSpace() {
  return (
    <div className={styles.tasksGrid}>
      <AddTask />
      <AddTask />
      <AddTask />
      <AddTask />
      <AddTask />
    </div>
  );
}

export default TasksSpace;
