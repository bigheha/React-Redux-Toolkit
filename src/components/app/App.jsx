import styles from "./layout.module.css";

import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import TasksSpace from "../tasksSpace/tasksSpace";

import useWindowWidth from "../../customHooks/useWindowWidth";
import { useDispatch, useSelector } from "react-redux";
import { close, open } from "../../features/sidebar/sidebarSlice";
import { useEffect } from "react";

function App() {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const width = useWindowWidth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (width > 600) {
      dispatch(open());
    } else {
      dispatch(close());
    }
  }, [width]);

  console.log({ isOpen });

  return (
    <>
      <div className={styles.grid}>
        <Header width={width} />
        {isOpen && <Sidebar width={width} />}
        <TasksSpace />
      </div>
    </>
  );
}

export default App;
