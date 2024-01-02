import styles from "@/ui/MainContent/components/PokemonDetail/PokemonDetail.module.css";

export const Thumbnail = ({ src, alt }) => (
  <div className={styles["sprite-wrapper"]}>
    <img loading="lazy" className={styles["sprite"]} src={src} alt={alt} />
  </div>
);
