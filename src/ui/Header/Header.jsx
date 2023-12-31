import styles from "@/ui/Header/Header.module.css";

export const Header = () => {
  return (
    <header className={styles["wrapper"]}>
      <h1>ReactQuery & zustand</h1>
      <h2>Infinite scroll + state management</h2>
    </header>
  );
};
