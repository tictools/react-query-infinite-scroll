import useStore from "@/store/index";
import { Pokemon } from "@/ui/MainContent/mappers/Pokemon";
import { useQuery } from "@tanstack/react-query";

import { http } from "@/services/http";

const BASE_URL = "https://pokeapi.co/api/v2";
const POKEMON_RESOURCE_PATH = "pokemon";
const SPECIES_RESOURCE_PATH = "pokemon-species";

export const usePokemonData = () => {
  const currentIndex = useStore((state) => state.currentIndex);

  const { data, error, isFetching, isSuccess } = useQuery({
    queryKey: ["pokemon", currentIndex],

    queryFn: async () => {
      const promises = [
        http.get(`${BASE_URL}/${POKEMON_RESOURCE_PATH}/${currentIndex + 1}`),
        http.get(`${BASE_URL}/${SPECIES_RESOURCE_PATH}/${currentIndex + 1}`),
      ];

      const [pokemonDTO, speciesDTO] = await Promise.all(promises);

      return Pokemon(pokemonDTO, speciesDTO);
    },
  });

  return { data, error, isFetching, isSuccess };
};
