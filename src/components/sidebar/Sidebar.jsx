import { useDispatch, useSelector } from "react-redux";
import { close } from "../../features/sidebar/sidebarSlice";
import styles from "./sidebar.module.css";
import List from "../list/List";

export default function Sidebar({ width }) {
  const lists = useSelector((state) => state.tasks.lists);
  const dispatch = useDispatch();

  return (
    <div className={styles.sidebar}>
      {width < 600 && (
        <button
          className={styles.closeBtn}
          onClick={() => {
            dispatch(close());
          }}
        >
          close
        </button>
      )}
      {lists.map((list) => {
        return (
          <List key={list.id} id={list.id}>
            {list.name}
          </List>
        );
      })}
    </div>
  );
}
