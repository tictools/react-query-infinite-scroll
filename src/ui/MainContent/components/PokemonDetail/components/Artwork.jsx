import styles from "@/ui/MainContent/components/PokemonDetail/PokemonDetail.module.css";

export const Artwork = ({ name, src }) => {
  return (
    <img
      className={`${styles["artwork"]}`}
      src={src}
      loading="lazy"
      alt={name}
    />
  );
};
