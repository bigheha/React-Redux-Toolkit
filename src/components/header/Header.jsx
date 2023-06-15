import styles from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { open } from "../../features/sidebar/sidebarSlice";
import { useDispatch } from "react-redux";

export default function Header({ width }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.header}>
      {width < 600 && (
        <button className={styles.listBtn} onClick={() => dispatch(open())}>
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "#9DC5BB" }}
            size="xl"
          />
        </button>
      )}
    </div>
  );
}
