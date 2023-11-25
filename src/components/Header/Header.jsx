import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles["wrapper"]}>
      <h1>ReactQuery</h1>
      <h2>Infinite scroll</h2>
    </div>
  );
};
