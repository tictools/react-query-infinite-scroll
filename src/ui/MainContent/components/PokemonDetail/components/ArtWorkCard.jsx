import styles from "@/ui/MainContent/components/PokemonDetail/PokemonDetail.module.css";
import { Artwork } from "./Artwork";
import { TypesList } from "./TypesList";

export const ArtWorkCard = ({ src, name, color, types }) => {
  const artWorkClassName = `${styles["artwork__container"]} ${
    styles[`artwork--bg-${color}`]
  }`;

  return (
    <div className={artWorkClassName}>
      <Artwork color={color} name={name} src={src} />
      <TypesList types={types} />
    </div>
  );
};
