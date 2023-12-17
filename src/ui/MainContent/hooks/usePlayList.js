import useStore from "@/store/index";
import { usePokemonsData } from "./usePokemonsData";

export const usePlaylist = () => {
  const currentIndex = useStore((state) => state.currentIndex);
  const { pokemons } = usePokemonsData();

  const prevPokemonName = (index) => {
    if (index - 1 < 0) {
      return pokemons[pokemons.length - 1]?.name;
    }

    return pokemons[index - 1]?.name;
  };

  const nextPokemonName = (index) => {
    if (index + 1 > pokemons.length - 1) {
      return pokemons[0]?.name;
    }

    return pokemons[index + 1]?.name;
  };

  return {
    prevName: prevPokemonName(currentIndex),
    nextName: nextPokemonName(currentIndex),
  };
};
