import { useInfiniteQuery } from "@tanstack/react-query";
import { http } from "../../../services/http";
import { BASE_URL, SUBPATHS_URL } from "../../../services/http/constants";

export const usePokemonsData = () => {
  const initialPageParam = `${BASE_URL}/${SUBPATHS_URL.POKEMON}/?offset=0&limit=40`;

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
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
    count: data?.pages[0]?.count ?? 0,
    currentLength: data?.pages?.flatMap((page) => page.results)?.length ?? 0,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    pokemons: data?.pages?.flatMap((page) => page.results) ?? [],
  };
};
