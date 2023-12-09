import { usePlaylist } from "@/ui/MainContent/hooks";
import styles from "@/ui/Subheader/Subheader.module.css";
import { ForwardIcon } from "@/ui/icons";

export const ForwardPokemon = () => {
  const { forward: name } = usePlaylist();

  return (
    <>
      <ForwardIcon />
      <p className={styles["playlist__navigation-item"]}>{name}</p>
    </>
  );
};
