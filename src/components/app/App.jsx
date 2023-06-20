import styles from "./layout.module.css";

import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import TasksSpace from "../tasksSpace/tasksSpace";

import useWindowWidth from "../../customHooks/useWindowWidth";
import { useDispatch, useSelector } from "react-redux";
import { close, open } from "../../features/sidebar/sidebarSlice";
import { useEffect } from "react";
import AddTaskModal from "../addTaskModal/AddTaskModal";
import AddListModal from "../addListModal/addListModal";

function App() {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const taskModalOpen = useSelector((state) => state.taskModal.modalOpen);
  const listModalOpen = useSelector((state) => state.listModal.listModalOpen);
  const width = useWindowWidth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (width > 600) {
      dispatch(open());
    } else {
      dispatch(close());
    }
  }, [width]);

  return (
    <>
      <div className={styles.grid}>
        <Header width={width} />
        {isOpen && <Sidebar width={width} />}
        <TasksSpace />
      </div>
      {taskModalOpen && <AddTaskModal />}
      {listModalOpen && <AddListModal />}
    </>
  );
}

export default App;
