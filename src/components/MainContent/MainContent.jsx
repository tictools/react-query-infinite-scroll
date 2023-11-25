import styles from "./MainContent.module.css";
import { UserDetail } from "./components/UserDetail/UserDetail";
import { UsersList } from "./components/UsersList/UsersList";

export const MainContent = () => {
  return (
    <main className={styles["wrapper"]}>
      <UserDetail />
      <UsersList />
    </main>
  );
};
