import { Pokemons } from "@/ui/MainContent/mappers/Pokemons";
import { useInfiniteQuery } from "@tanstack/react-query";
import { http } from "../../../services/http";
import { BASE_URL, SUBPATHS_URL } from "../../../services/http/constants";

export const usePokemonsData = () => {
  const initialPageParam = `${BASE_URL}/${SUBPATHS_URL.POKEMON}/?offset=0&limit=40`;

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["pokemons"],

      queryFn: async ({ pageParam }) => {
        const data = await http.get(pageParam);
        return data;
      },

      initialPageParam,

      getNextPageParam: (lastPage) => {
        return lastPage.next;
      },
    });

  return {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    ...Pokemons(data),
  };
};
