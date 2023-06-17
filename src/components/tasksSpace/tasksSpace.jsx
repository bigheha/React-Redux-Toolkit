import styles from "./tasksSpace.module.css";
import AddTask from "../addTask/AddTask";
import Task from "../task/Task";
import { useSelector } from "react-redux";

function TasksSpace() {
  const lists = useSelector((state) => state.tasks.tasklists);
  const idOfSelectedList = useSelector((state) => state.tasks.selectedList);
  const selectedList = lists.filter((list) => list.id == idOfSelectedList);

  return (
    <div className={styles.tasksGrid}>
      {selectedList[0].tasks.map((task, id) => {
        return <Task key={id}>{task}</Task>;
      })}
      <AddTask />
    </div>
  );
}

export default TasksSpace;
