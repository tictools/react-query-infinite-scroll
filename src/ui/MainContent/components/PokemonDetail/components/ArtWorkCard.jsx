import styles from "@/ui/MainContent/components/PokemonDetail/PokemonDetail.module.css";

export const ArtWorkCard = ({ src, name, color }) => {
  const artWorkClassName = `${styles["artwork__container"]} ${
    styles[`artwork--bg-${color}`]
  }`;

  return (
    <div className={artWorkClassName}>
      <img
        className={`${styles["artwork"]}`}
        src={src}
        loading="lazy"
        alt={name}
      />
    </div>
  );
};
