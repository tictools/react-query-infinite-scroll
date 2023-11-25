import { useEffect, useState } from "react";
import { http } from "../../../../../services/http";
import { BASE_URL, SUBPATHS_URL } from "../../../../../services/http/constants";
//https://pokeapi.co/api/v2/pokemon/?offset=40&limit=40
export const usePokemonData = () => {
  const resourcePath = `${BASE_URL}/${SUBPATHS_URL.POKEMON}/?offset=0&limit=40`;
  const [users, setUsers] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    http.get(resourcePath).then((response) => {
      setLoading(false);
      setUsers(response.results);
      setPagination({
        prev: response.previous,
        next: response.next,
      });
    });
  }, [resourcePath]);

  return {
    loading,
    users,
    pagination,
  };
};
