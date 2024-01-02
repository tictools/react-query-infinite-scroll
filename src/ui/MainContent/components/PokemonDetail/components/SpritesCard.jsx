import styles from "@/ui/MainContent/components/PokemonDetail/PokemonDetail.module.css";
import { Sprite } from "@/ui/MainContent/components/PokemonDetail/components";
import { useAllowedSprites } from "@/ui/MainContent/hooks";

export const SpritesCard = ({ sprites, name }) => {
  const { spritesToRender } = useAllowedSprites(sprites);

  return (
    <div className={styles["sprite-card"]}>
      {spritesToRender.map((sprite, index) => (
        <Sprite key={index} src={sprite.src} alt={`${name} - ${sprite.key}`} />
      ))}
    </div>
  );
};
