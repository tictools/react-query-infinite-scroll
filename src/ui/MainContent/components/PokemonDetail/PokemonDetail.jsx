import pokemonsStore from "@/store/index";
import { usePokemonData } from "../../hooks";
import styles from "./PokemonDetail.module.css";

export const PokemonDetail = () => {
  const currentIndex = pokemonsStore((state) => state.currentIndex);

  const { data: pokemon, error, isFetching } = usePokemonData(currentIndex);

  if (error) {
    return <div>Error</div>;
  }

  return (
    <section className={styles["wrapper"]}>
      {isFetching && <div>Loading</div>}

      {!isFetching && (
        <>
          <img
            loading="lazy"
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
          <h2 className={styles["header"]}>{pokemon.name.toUpperCase()}</h2>
        </>
      )}
    </section>
  );
};
