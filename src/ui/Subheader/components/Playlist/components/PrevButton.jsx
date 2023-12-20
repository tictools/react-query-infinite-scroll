import {
  usePokemonData,
  usePokemonsData,
  useStoreSelectorBy,
} from "@/ui/MainContent/hooks";
import { PrevIcon } from "@/ui/icons";
import styles from "../Playlist.module.css";

export const PrevButton = () => {
  const { currentLength } = usePokemonsData();
  const getPrev = useStoreSelectorBy("getPrev");
  const { isFetching } = usePokemonData();

  const handlePrev = () => {
    getPrev(currentLength);
  };

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
