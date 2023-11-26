import styles from "./MainContent.module.css";
import { PokemonDetail, PokemonsList } from "./components";

export const MainContent = () => {
  return (
    <main className={styles["wrapper"]}>
      <PokemonDetail />
      <PokemonsList />
    </main>
  );
};
