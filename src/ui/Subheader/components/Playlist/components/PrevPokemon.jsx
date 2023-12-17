import {
  usePlaylist,
  usePokemonsData,
  useStoreSelectorBy,
} from "@/ui/MainContent/hooks";
import styles from "@/ui/Subheader/Subheader.module.css";
import { PrevIcon } from "@/ui/icons";

export const PrevPokemon = () => {
  const { currentLength } = usePokemonsData();
  const { prev: name } = usePlaylist();
  const getPrev = useStoreSelectorBy("getPrev");

  const handlePrev = () => {
    getPrev(currentLength);
  };

  return (
    <>
      <p className={styles["playlist__navigation-item"]}>{name}</p>
      <PrevIcon onClick={handlePrev} />
    </>
  );
};
