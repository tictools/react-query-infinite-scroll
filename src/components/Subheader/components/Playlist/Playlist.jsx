import { ForwardIcon, PrevIcon } from "../../../icons";
import styles from "./Playlist.module.css";

export const Playlist = () => {
  return (
    <div className={styles["wrapper"]}>
      <PrevIcon />
      <div>User Placeholder</div>
      <ForwardIcon />
    </div>
  );
};
