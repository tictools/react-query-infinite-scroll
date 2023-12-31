import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { usePokemonsData } from "./usePokemonsData";

export const useFetchNextPageInView = () => {
  const { fetchNextPage } = usePokemonsData();

  const { ref: inViewRef, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return { inViewRef };
};
