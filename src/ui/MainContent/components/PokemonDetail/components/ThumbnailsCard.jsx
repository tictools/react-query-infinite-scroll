import styles from "@/ui/MainContent/components/PokemonDetail/PokemonDetail.module.css";
import { Thumbnail } from "@/ui/MainContent/components/PokemonDetail/components";

export const ThumbnailsCard = ({ thumbnails, name }) => {
  return (
    <div className={styles["sprite-card"]}>
      {thumbnails?.map((thumbnail, index) => (
        <Thumbnail
          key={index}
          src={thumbnail.src}
          alt={`${name} - ${thumbnail.key}`}
        />
      )) ?? []}
    </div>
  );
};
