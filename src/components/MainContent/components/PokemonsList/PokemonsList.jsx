import { useRef } from "react";
import { Loader } from "../../../Loader";
import styles from "./PokemonsList.module.css";
import { List } from "./components";
import { usePokemonData } from "./hooks";

export const PokemonsList = () => {
  const listRef = useRef(null);
  const { loading, pokemons } = usePokemonData();

  return (
    <aside className={styles["wrapper"]}>
      <h2 className={styles["header"]}>Pokemons</h2>

      {loading && <Loader />}

      {!loading && (
        <div ref={listRef} className={styles["list__wrapper"]}>
          <List pokemons={pokemons} />
        </div>
      )}
    </aside>
  );
};
