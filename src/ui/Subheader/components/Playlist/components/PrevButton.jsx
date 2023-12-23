import { STATE } from "@/store/state";
import {
  usePokemonData,
  usePokemonsData,
  useStoreSelectorBy,
} from "@/ui/MainContent/hooks";
import styles from "@/ui/Subheader/components/Playlist/Playlist.module.css";
import { PrevIcon } from "@/ui/icons";
import { useCallback } from "react";

export const PrevButton = () => {
  const { currentLength } = usePokemonsData();
  const { isFetching } = usePokemonData();
  const getPrev = useStoreSelectorBy(STATE.getPrev);

  const handlePrev = useCallback(() => {
    getPrev(currentLength);
  }, [currentLength, getPrev]);

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
