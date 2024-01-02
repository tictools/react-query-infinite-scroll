import { Thumbnails } from "@/ui/MainContent/mappers/Thumbnails";
import { ArtWorkDefault } from "./ArtWork";

export const Sprites = (sprites) => {
  return {
    thumbnails: Thumbnails(sprites),
    artWork: {
      default: ArtWorkDefault(sprites),
    },
  };
};
