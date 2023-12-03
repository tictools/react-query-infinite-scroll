import { Actions } from "./components";
import { Playlist } from "./components/Playlist";
import styles from "./Subheader.module.css";

export const Subheader = () => {
  return (
    <div className={styles["wrapper"]}>
      <Playlist />
      <Actions />
    </div>
  );
};
