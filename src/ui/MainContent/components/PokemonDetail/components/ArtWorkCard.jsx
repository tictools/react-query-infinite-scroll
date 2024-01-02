import styles from "@/ui/MainContent/components/PokemonDetail/PokemonDetail.module.css";

export const ArtWorkCard = ({ src, name, color }) => {
  return (
    <div className={styles[`sprite__bg--${color}`]}>
      <img src={src} alt={name} />
    </div>
  );
};
