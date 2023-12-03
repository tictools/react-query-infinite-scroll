import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles["wrapper"]}>
      <h1>ReactQuery</h1>
      <h2>Infinite scroll</h2>
    </header>
  );
};
