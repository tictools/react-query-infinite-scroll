/* eslint-disable react-hooks/exhaustive-deps */

import {
  useAutoScroll,
  usePokemonData,
  usePokemonsData,
  useStoreSelectorBy,
} from "@/ui/MainContent/hooks";
import { PrevIcon } from "@/ui/icons";
import { useCallback, useEffect } from "react";
import styles from "../Playlist.module.css";

export const PrevButton = () => {
  const { currentLength } = usePokemonsData();
  const { handleAutoScroll } = useAutoScroll();
  const { isFetching } = usePokemonData();
  const currentIndex = useStoreSelectorBy("currentIndex");
  const elementsRef = useStoreSelectorBy("elementsRef");
  const getPrev = useStoreSelectorBy("getPrev");

  const handlePrev = useCallback(() => {
    getPrev(currentLength);
  }, [currentLength]);

  useEffect(() => {
    handleAutoScroll(elementsRef[currentIndex]);
  }, [currentIndex]);

  return (
    <button
      className={styles["playlist__button"]}
      disabled={isFetching}
      onClick={handlePrev}
    >
      <PrevIcon />
    </button>
  );
};
