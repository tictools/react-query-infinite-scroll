import {
  usePokemonData,
  usePokemonsData,
  useStoreSelectorBy,
} from "@/ui/MainContent/hooks";
import { NextIcon } from "@/ui/icons";
import styles from "../Playlist.module.css";

export const NextButton = () => {
  const { currentLength } = usePokemonsData();
  const getNext = useStoreSelectorBy("getNext");
  const { isFetching } = usePokemonData();

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
