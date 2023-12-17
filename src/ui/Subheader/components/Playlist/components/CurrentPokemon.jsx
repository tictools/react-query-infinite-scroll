import { usePokemonData } from "@/ui/MainContent/hooks";
import styles from "@/ui/Subheader/Subheader.module.css";

export const CurrentPokemon = () => {
  const { data: pokemon, isFetching } = usePokemonData();
  const currentPokemon = isFetching ? "fetching" : pokemon.name;

  return <p className={styles["playlist__current"]}>{currentPokemon}</p>;
};
