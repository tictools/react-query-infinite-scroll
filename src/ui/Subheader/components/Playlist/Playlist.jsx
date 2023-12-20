import styles from "./Playlist.module.css";
import { CurrentPokemon, NextPokemon, PrevPokemon } from "./components";

export const Playlist = () => {
  return (
    <div className={styles["wrapper"]}>
      <PrevPokemon />
      <CurrentPokemon />
      <NextPokemon />
    </div>
  );
};
