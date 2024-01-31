import useStore from "@/store/index";
import styles from "@/ui/MainContent/components/PokemonDetail/PokemonDetail.module.css";
import { usePokemonData } from "@/ui/MainContent/hooks";
import { ArtWorkCard } from "./components";
import { AbilitiesList } from "./components/AbilitiesList";
import { MeasuresList } from "./components/MeasuresList";
import { StatsList } from "./components/StatsList";

export const PokemonDetail = () => {
  const currentIndex = useStore((state) => state.currentIndex);

  const { data: pokemon, error, isFetching } = usePokemonData(currentIndex);
  console.log("🚀 ~ PokemonDetail ~ pokemon:", pokemon);

  if (error) {
    return <div>Error</div>;
  }

  return (
    <section className={styles["wrapper"]}>
      {isFetching && <div>Loading</div>}

      {!isFetching && (
        <>
          <ArtWorkCard
            src={pokemon.sprites.artWork.default}
            alt={pokemon.name}
            color={pokemon.species.color}
            types={pokemon.types}
          />
          <MeasuresList height={pokemon.height} weight={pokemon.weight} />
          <AbilitiesList abilities={pokemon.abilities} />
          <StatsList stats={pokemon.stats} />
        </>
      )}
    </section>
  );
};
