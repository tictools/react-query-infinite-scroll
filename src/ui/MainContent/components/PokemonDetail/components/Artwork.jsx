import styles from "@/ui/MainContent/components/PokemonDetail/PokemonDetail.module.css";

export const Artwork = ({ color, name, src }) => {
  const LIGHT_COLORS = ["gray"];
  const shadowSuffix = LIGHT_COLORS.includes(color) ? "soft" : "white";

  return (
    <img
      className={`${styles["artwork"]} ${
        styles[`artwork--shadow-${shadowSuffix}`]
      }`}
      src={src}
      loading="lazy"
      alt={name}
    />
  );
};
