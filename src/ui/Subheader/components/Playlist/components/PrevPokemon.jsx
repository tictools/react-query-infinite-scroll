import { usePlaylist } from "@/ui/MainContent/hooks";
import styles from "@/ui/Subheader/Subheader.module.css";
import { PrevIcon } from "@/ui/icons";

export const PrevPokemon = () => {
  const { prev: name } = usePlaylist();

  return (
    <>
      <p className={styles["playlist__navigation-item"]}>{name}</p>
      <PrevIcon />
    </>
  );
};
