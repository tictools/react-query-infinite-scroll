import pokemonsStore from "@/store/index";
import { usePokemonsData } from "./usePokemonsData";

export const usePlaylist = () => {
  const currentIndex = pokemonsStore((state) => state.currentIndex);
  const { pokemons } = usePokemonsData();

  const prevPokemonName = (index) => {
    if (index - 1 < 0) {
      return pokemons[pokemons.length - 1]?.name;
    }

    return pokemons[index - 1]?.name;
  };

  const forwardPokemonName = (index) => {
    if (index + 1 > pokemons.length - 1) {
      return pokemons[0]?.name;
    }

    return pokemons[index + 1]?.name;
  };

  return {
    prev: prevPokemonName(currentIndex),
    forward: forwardPokemonName(currentIndex),
  };
};
