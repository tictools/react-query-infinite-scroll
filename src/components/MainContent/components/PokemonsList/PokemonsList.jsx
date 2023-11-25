import styles from "./PokemonsList.module.css";
import { usePokemonData } from "./hooks";

export const PokemonsList = () => {
  const { loading, users } = usePokemonData();

  return (
    <aside className={styles["wrapper"]}>
      <h2 className={styles["header"]}>Users</h2>

      {loading && <>Loading...</>}

      {!loading && (
        <ul>
          {users?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </aside>
  );
};
