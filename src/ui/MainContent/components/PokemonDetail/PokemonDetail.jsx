import useStore from "@/store/index";
import styles from "@/ui/MainContent/components/PokemonDetail/PokemonDetail.module.css";
import { usePokemonData } from "@/ui/MainContent/hooks";
import { ArtWorkCard } from "./components";

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
          <ArtWorkCard
            src={pokemon.sprites.artWork.default}
            alt={pokemon.name}
            color={pokemon.species.color}
          />

          <p>{`height: ${pokemon.height}`}</p>
          <p>{`weight: ${pokemon.weight}`}</p>

          {pokemon.abilities.map((ability) => (
            <div key={ability.ability.name}>
              <p>{`${ability.ability.name}: ${ability.is_hidden}`} </p>
              <p>{`is Hidden: ${ability.is_hidden}`} </p>
            </div>
          ))}

          {pokemon.stats.map((stat) => (
            <div key={stat.name}>
              <p>{`${stat.name}: ${stat.base}`} </p>
            </div>
          ))}
        </>
      )}
    </section>
  );
};
