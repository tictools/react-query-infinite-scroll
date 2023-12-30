import styles from "@/ui/MainContent/components/PokemonDetail/PokemonDetail.module.css";
import { Sprite } from "@/ui/MainContent/components/PokemonDetail/components";
import { useCallback, useMemo } from "react";

export const SpritesCard = ({ sprites, name }) => {
  const allowedSprites = useMemo(
    () => ["front_default", "back_default", "front_shiny", "back_shiny"],
    [],
  );

  const isAllowedSprite = useCallback(
    (key) => allowedSprites.includes(key),
    [allowedSprites],
  );

  const spritesToRender = Object.entries(sprites)
    .map(([key, src]) => {
      if (isAllowedSprite(key)) {
        return {
          key,
          src,
          position: allowedSprites.indexOf(key),
        };
      }
    })
    .filter((sprite) => Boolean(sprite))
    .sort(
      (prevSprite, nextSprite) => prevSprite.position - nextSprite.position,
    );

  return (
    <div className={styles["sprite-card"]}>
      {spritesToRender.map((sprite, index) => (
        <Sprite key={index} src={sprite.src} alt={`${name} - ${sprite.key}`} />
      ))}
    </div>
  );
};
