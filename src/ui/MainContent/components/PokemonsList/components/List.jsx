import styles from "@/ui/MainContent/components/PokemonsList/PokemonsList.module.css";
import { usePokemonData } from "@/ui/MainContent/hooks";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const List = () => {
  const { fetchNextPage, hasNextPage, pokemons } = usePokemonData();

  const { ref: inViewRef, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <ul className={styles["list"]}>
      {pokemons?.map((pokemon) => (
        <li className={styles["list__item"]} key={pokemon.name}>
          {pokemon.name}
        </li>
      ))}
      <div
        ref={inViewRef}
        style={{
          backgroundColor: "#FCB667",
          borderRadius: "0.25rem",
          height: "auto",
          width: "100%",
          textAlign: "center",
        }}
      >
        {hasNextPage ? "Fetching Pokemons..." : "No more pokemons to fetch"}
      </div>
    </ul>
  );
};
