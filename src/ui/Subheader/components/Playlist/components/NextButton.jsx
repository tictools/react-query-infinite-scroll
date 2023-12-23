import {
  usePokemonData,
  usePokemonsData,
  useStoreSelectorBy,
} from "@/ui/MainContent/hooks";
import styles from "@/ui/Subheader/components/Playlist/Playlist.module.css";
import { NextIcon } from "@/ui/icons";
import { useCallback } from "react";

export const NextButton = () => {
  const { currentLength } = usePokemonsData();
  const getNext = useStoreSelectorBy("getNext");
  const { isFetching } = usePokemonData();

  const handleNext = useCallback(() => {
    getNext(currentLength);
  }, [currentLength, getNext]);

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
