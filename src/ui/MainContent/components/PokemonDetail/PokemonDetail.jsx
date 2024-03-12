import useStore from "@/store/index";
import { usePokemonData } from "@/ui/MainContent/hooks";
import { ArtWorkCard } from "./components";
import { AbilitiesList } from "./components/AbilitiesList";
import { SizeInfo } from "./components/SizeInfo.jsx";
import { StatsList } from "./components/StatsList";

import styles from "@/ui/MainContent/components/PokemonDetail/PokemonDetail.module.css";

export const PokemonDetail = () => {
  const currentIndex = useStore((state) => state.currentIndex);

  const { data: pokemon, error, isFetching } = usePokemonData(currentIndex);

  if (error) {
    return <div>Error</div>;
  }

  return (
    <section className={styles["wrapper"]}>
      {isFetching && <div>Loading</div>}

      {!isFetching && (
        <>
          <StatsList stats={pokemon.stats} />
          <SizeInfo height={pokemon.height} weight={pokemon.weight} />
          <ArtWorkCard
            src={pokemon.sprites.artWork.default}
            alt={pokemon.name}
            color={pokemon.species.color}
            types={pokemon.types}
          />
          <AbilitiesList abilities={pokemon.abilities} />
        </>
      )}
    </section>
  );
};
