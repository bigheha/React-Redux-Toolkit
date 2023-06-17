import styles from "./tasksSpace.module.css";
import AddTask from "../addTask/AddTask";
import Task from "../task/Task";
import { useSelector } from "react-redux";

function TasksSpace() {
  const lists = useSelector((state) => state.tasks.lists);
  const idOfSelectedList = useSelector((state) => state.tasks.selectedList);
  const selectedList = lists.filter((list) => list.id == idOfSelectedList);
  console.log(selectedList);

  return (
    <div className={styles.tasksGrid}>
      {selectedList[0].tasks.map((task) => {
        return <Task>{task}</Task>;
      })}
      <AddTask />
    </div>
  );
}

export default TasksSpace;
