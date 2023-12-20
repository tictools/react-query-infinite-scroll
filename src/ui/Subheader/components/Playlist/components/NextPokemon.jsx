import { usePlaylist } from "@/ui/MainContent/hooks";
import styles from "@/ui/Subheader/Subheader.module.css";
import { NextButton } from "./NextButton";

export const NextPokemon = () => {
  const { nextName } = usePlaylist();

  return (
    <>
      <NextButton />
      <p className={styles["playlist__navigation-item"]}>{nextName}</p>
    </>
  );
};
