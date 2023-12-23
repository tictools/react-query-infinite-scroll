/* eslint-disable react-hooks/exhaustive-deps */

import {
  useAutoScroll,
  usePokemonData,
  usePokemonsData,
  useStoreSelectorBy,
} from "@/ui/MainContent/hooks";
import { NextIcon } from "@/ui/icons";
import { useEffect } from "react";
import styles from "../Playlist.module.css";

export const NextButton = () => {
  const { currentLength } = usePokemonsData();
  const getNext = useStoreSelectorBy("getNext");
  const { isFetching } = usePokemonData();
  const currentIndex = useStoreSelectorBy("currentIndex");
  const { handleAutoScroll } = useAutoScroll();
  const elementsRef = useStoreSelectorBy("elementsRef");

  useEffect(() => {
    handleAutoScroll(elementsRef[currentIndex]);
  }, [currentIndex]);

  const handleNext = () => {
    getNext(currentLength);
  };

  return (
    <button
      className={styles["playlist__button"]}
      disabled={isFetching}
      onClick={handleNext}
    >
      <NextIcon />
    </button>
  );
};
