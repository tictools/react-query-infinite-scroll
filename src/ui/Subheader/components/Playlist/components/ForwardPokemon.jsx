import {
  usePlaylist,
  usePokemonsData,
  useStoreSelectorBy,
} from "@/ui/MainContent/hooks";
import styles from "@/ui/Subheader/Subheader.module.css";
import { ForwardIcon } from "@/ui/icons";

export const ForwardPokemon = () => {
  const { currentLength } = usePokemonsData();
  const { nextName } = usePlaylist();
  const getNext = useStoreSelectorBy("getNext");

  const handleNext = () => {
    getNext(currentLength);
  };

  return (
    <>
      <ForwardIcon onClick={handleNext} />
      <p className={styles["playlist__navigation-item"]}>{nextName}</p>
    </>
  );
};
