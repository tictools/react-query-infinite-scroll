import { PokemonDetail, PokemonsList } from "@/ui/MainContent/components";
import styles from "./MainContent.module.css";

export const MainContent = () => {
  return (
    <main className={styles["wrapper"]}>
      <PokemonDetail />
      <PokemonsList />
    </main>
  );
};
