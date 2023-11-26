import { useRef } from "react";
import styles from "./PokemonsList.module.css";
import { usePokemonData } from "./hooks";

export const PokemonsList = () => {
  const listRef = useRef(null);
  const { loading, pokemons } = usePokemonData();

  return (
    <aside className={styles["wrapper"]}>
      <h2 className={styles["header"]}>Pokemons</h2>

      {loading && <>Loading...</>}

      {!loading && (
        <div ref={listRef} className={styles["list__wrapper"]}>
          <ul className={styles["list"]}>
            {pokemons?.map((pokemon) => (
              <li className={styles["list__item"]} key={pokemon.id}>
                {pokemon.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
};
