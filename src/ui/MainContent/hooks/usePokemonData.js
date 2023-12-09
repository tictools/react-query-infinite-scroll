/* eslint-disable @tanstack/query/exhaustive-deps */
import { useQuery } from "@tanstack/react-query";

export const usePokemonData = (currentIndex) => {
  const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

  const { data, error, isFetching, isSuccess } = useQuery({
    queryKey: ["pokemon", currentIndex],

    queryFn: async () => {
      const response = await fetch(`${BASE_URL}/${currentIndex + 1}`);
      return await response.json();
    },
  });

  return { data, error, isFetching, isSuccess };
};
