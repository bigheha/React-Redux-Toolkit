import { useDispatch } from "react-redux";
import { close } from "../../features/sidebar/sidebarSlice";
import styles from "./sidebar.module.css";

export default function Sidebar({ width }) {
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
    </div>
  );
}
