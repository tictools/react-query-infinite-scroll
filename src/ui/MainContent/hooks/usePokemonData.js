/* eslint-disable @tanstack/query/exhaustive-deps */
import pokemonsStore from "@/store/index";
import { useQuery } from "@tanstack/react-query";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
export const usePokemonData = () => {
  const currentIndex = pokemonsStore((state) => state.currentIndex);

  const { data, error, isFetching, isSuccess } = useQuery({
    queryKey: ["pokemon", currentIndex],

    queryFn: async () => {
      const response = await fetch(`${BASE_URL}/${currentIndex + 1}`);
      return await response.json();
    },
  });

  return { data, error, isFetching, isSuccess };
};