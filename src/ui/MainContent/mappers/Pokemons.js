export const Pokemons = (data) => ({
  count: data?.pages[0]?.count ?? 0,
  currentLength: data?.pages?.flatMap((page) => page.results)?.length ?? 0,
  pokemons: data?.pages?.flatMap((page) => page.results) ?? [],
});
