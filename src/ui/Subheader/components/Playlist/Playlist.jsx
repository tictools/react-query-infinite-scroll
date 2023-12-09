import styles from "./Playlist.module.css";
import { CurrentPokemon, ForwardPokemon, PrevPokemon } from "./components";

export const Playlist = () => {
  return (
    <div className={styles["wrapper"]}>
      <PrevPokemon />
      <CurrentPokemon />
      <ForwardPokemon />
    </div>
  );
};
