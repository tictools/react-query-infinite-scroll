import { usePlaylist } from "@/ui/MainContent/hooks";
import styles from "@/ui/Subheader/Subheader.module.css";
import { PrevButton } from "./PrevButton";

export const PrevPokemon = () => {
  const { prevName } = usePlaylist();

  return (
    <>
      <p className={styles["playlist__navigation-item"]}>{prevName}</p>
      <PrevButton />
    </>
  );
};
