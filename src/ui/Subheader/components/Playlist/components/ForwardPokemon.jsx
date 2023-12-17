import useStore from "@/store/index";
import { usePlaylist, usePokemonsData } from "@/ui/MainContent/hooks";
import styles from "@/ui/Subheader/Subheader.module.css";
import { ForwardIcon } from "@/ui/icons";

export const ForwardPokemon = () => {
  const { currentLength } = usePokemonsData();
  const { forward: name } = usePlaylist();
  const getNext = useStore((state) => state.getNext);

  const handleNext = () => {
    getNext(currentLength);
  };

  return (
    <>
      <ForwardIcon onClick={handleNext} />
      <p className={styles["playlist__navigation-item"]}>{name}</p>
    </>
  );
};
