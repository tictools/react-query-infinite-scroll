import { Sprite } from "@/ui/MainContent/mappers/";
import { useCallback, useMemo } from "react";

const ALLOWED_SPRITES = [
  "front_default",
  "back_default",
  "front_shiny",
  "back_shiny",
];

const byPosition = (prevSprite, nextSprite) =>
  prevSprite.position - nextSprite.position;

export const useAllowedSprites = (sprites) => {
  const allowedSprites = useMemo(() => ALLOWED_SPRITES, []);

  const isAllowedSprite = useCallback(
    ([key]) => allowedSprites.includes(key),
    [allowedSprites],
  );

  const spritesToRender = Object.entries(sprites)
    .filter(isAllowedSprite)
    .map(Sprite(allowedSprites))
    .sort(byPosition);

  return { spritesToRender };
};
