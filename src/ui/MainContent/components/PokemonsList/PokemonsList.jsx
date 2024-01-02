import styles from "./PokemonsList.module.css";
import { Counter, List } from "./components";

export const PokemonsList = () => {
  return (
    <aside className={styles["wrapper"]}>
      <div className={styles["list__wrapper"]}>
        <List />
      </div>
      <div>
        <Counter />
      </div>
    </aside>
  );
};
