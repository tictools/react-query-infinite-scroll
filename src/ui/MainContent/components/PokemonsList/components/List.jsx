import { Loader } from "@/ui/Loader";
import styles from "@/ui/MainContent/components/PokemonsList/PokemonsList.module.css";
import { usePokemonsData } from "@/ui/MainContent/hooks";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ListItem } from "./ListItem";

export const List = () => {
  const { fetchNextPage, hasNextPage, pokemons } = usePokemonsData();

  const { ref: inViewRef, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

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
