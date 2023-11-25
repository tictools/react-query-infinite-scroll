import styles from "./UsersList.module.css";
import { useUsersData } from "./hooks";

export const UsersList = () => {
  const { loading, users } = useUsersData();

  return (
    <aside className={styles["wrapper"]}>
      <h2 className={styles["header"]}>Users</h2>

      {loading && <>Loading...</>}

      {!loading && (
        <ul>
          {users?.map((user) => (
            <li key={user.id}>{user.email}</li>
          ))}
        </ul>
      )}
    </aside>
  );
};
