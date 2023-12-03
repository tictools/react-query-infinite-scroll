import { useInfiniteQuery } from "@tanstack/react-query";
import { http } from "../../../../../services/http";
import { BASE_URL, SUBPATHS_URL } from "../../../../../services/http/constants";

export const usePokemonData = () => {
  const initialPageParam = `${BASE_URL}/${SUBPATHS_URL.POKEMON}/?offset=0&limit=40`;

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["pokemons"],
    queryFn: async ({ pageParam }) => {
      const response = await http.get(pageParam);
      return response;
    },
    initialPageParam,
    getNextPageParam: (lastPage) => {
      return lastPage.next;
    },
  });

  return {
    fetchNextPage,
    hasNextPage,
    pokemons: data?.pages?.flatMap((page) => page.results),
  };
};
