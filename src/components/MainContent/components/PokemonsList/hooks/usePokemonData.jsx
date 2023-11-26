import { useEffect, useState } from "react";
import { http } from "../../../../../services/http";
import { BASE_URL, SUBPATHS_URL } from "../../../../../services/http/constants";

export const usePokemonData = () => {
  const resourcePath = `${BASE_URL}/${SUBPATHS_URL.POKEMON}/?offset=0&limit=40`;
  const [pokemons, setPokemons] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    http.get(resourcePath).then((response) => {
      setLoading(false);
      setPokemons(response.results);
      setPagination({
        prev: response.previous,
        next: response.next,
      });
    });
  }, [resourcePath]);

  return {
    loading,
    pokemons,
    pagination,
  };
};
