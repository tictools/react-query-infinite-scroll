import { Actions, Navigation } from "./components";
import styles from "./Subheader.module.css";

export const Subheader = () => {
  return (
    <div className={styles["wrapper"]}>
      <Navigation />
      <Actions />
    </div>
  );
};
