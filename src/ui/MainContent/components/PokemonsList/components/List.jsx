import { Loader } from "@/ui/Loader";
import styles from "@/ui/MainContent/components/PokemonsList/PokemonsList.module.css";
import {
  useFetchNextPageInView,
  usePokemonsData,
} from "@/ui/MainContent/hooks";
import { ListItem } from "./ListItem";

export const List = () => {
  const { hasNextPage, pokemons } = usePokemonsData();
  const { inViewRef } = useFetchNextPageInView();

  return (
    <ul className={styles["list"]}>
      {pokemons?.map((pokemon, index) => (
        <ListItem key={pokemon.name} index={index} name={pokemon.name} />
      ))}
      <div
        ref={inViewRef}
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {hasNextPage ? <Loader /> : "No more pokemons to fetch"}
      </div>
    </ul>
  );
};
