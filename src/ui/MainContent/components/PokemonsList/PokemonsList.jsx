import styles from "./PokemonsList.module.css";
import { Counter, List } from "./components";

export const PokemonsList = () => {
  return (
    <aside className={styles["wrapper"]}>
      <h2 className={styles["header"]}>Pokemons</h2>
      <div className={styles["list__wrapper"]}>
        <List />
      </div>
      <div>
        <Counter />
      </div>
    </aside>
  );
};
