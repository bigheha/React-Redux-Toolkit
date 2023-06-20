import styles from "./tasksSpace.module.css";
import AddTask from "../addTask/AddTask";
import Task from "../task/Task";
import { useSelector } from "react-redux";

function TasksSpace() {
  const lists = useSelector((state) => state.tasks.tasklists);
  const idOfSelectedList = useSelector((state) => state.tasks.selectedList);
  let selectedList = lists.find((list) => list.id == idOfSelectedList);

  if (selectedList === undefined) {
    selectedList = lists.at(lists.length - 1);
    console.log(selectedList);
  }

  return (
    <div className={styles.tasksGrid}>
      {selectedList ? (
        <>
          {selectedList.tasks.map((task, id) => {
            return <Task key={id}>{task}</Task>;
          })}
          <AddTask />
        </>
      ) : (
        <p className={styles.noListText}>Select new list</p>
      )}
    </div>
  );
}

export default TasksSpace;
