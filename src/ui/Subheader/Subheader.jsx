import { Actions, Playlist } from "@/ui/Subheader/components";
import styles from "@/ui/Subheader/Subheader.module.css";

export const Subheader = () => {
  return (
    <div className={styles["wrapper"]}>
      <Playlist />
      <Actions />
    </div>
  );
};
