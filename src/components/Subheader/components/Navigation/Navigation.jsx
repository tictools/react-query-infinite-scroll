import { BackIcon } from "../../../icons";
import { Playlist } from "../Playlist";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={styles["wrapper"]}>
      <BackIcon />
      <Playlist />
    </nav>
  );
};
