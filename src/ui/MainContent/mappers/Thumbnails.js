import { Thumbnail } from "@/ui/MainContent/mappers/Thumbnail";

const ALLOWED_THUMBNAILS = [
  "front_default",
  "back_default",
  "front_shiny",
  "back_shiny",
];

const byPosition = (prevSprite, nextSprite) =>
  prevSprite.position - nextSprite.position;

const isAllowedThumbnail = ([key]) => ALLOWED_THUMBNAILS.includes(key);

export const Thumbnails = (sprites) =>
  Object.entries(sprites)
    .filter(isAllowedThumbnail)
    .map(Thumbnail(ALLOWED_THUMBNAILS))
    .sort(byPosition);
