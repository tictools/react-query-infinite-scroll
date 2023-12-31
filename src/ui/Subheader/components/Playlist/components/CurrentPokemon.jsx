import { Loader } from "@/ui/Loader";
import { usePokemonData } from "@/ui/MainContent/hooks";
import styles from "@/ui/Subheazder/Subheader.module.css";

export const CurrentPokemon = () => {
  const { data: pokemon, isFetching } = usePokemonData();

  if (isFetching) {
    return <Loader />;
  }

  return <p className={styles["playlist__current"]}>{pokemon.name}</p>;
};
