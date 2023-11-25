import { useEffect, useState } from "react";
import { http } from "../../../../../services/http";
import { BASE_URL, SUBPATHS_URL } from "../../../../../services/http/constants";

export const useUsersData = () => {
  const resourcePath = `${BASE_URL}/${SUBPATHS_URL.USERS}?page=1&per_page=`;
  const [users, setUsers] = useState(null);
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    http.get(resourcePath).then((response) => {
      setLoading(false);
      setUsers(response.data);
      setPage(response.page);
    });
  }, [resourcePath]);

  return {
    loading,
    users,
    page,
  };
};
