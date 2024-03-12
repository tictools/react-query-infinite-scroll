import Atropos from "atropos/react";

import { Artwork } from "./Artwork";
import { TypesList } from "./TypesList";

import styles from "@/ui/MainContent/components/PokemonDetail/PokemonDetail.module.css";

export const ArtWorkCard = ({ src, name, color, types }) => {
  const artWorkClassName = `${styles["artwork__container"]} ${
    styles[`artwork--bg-${color}`]
  }`;

  return (
    <>
      <Atropos activeOffset={40} shadowScale={0.9}>
        <div className={artWorkClassName}>
          <Artwork color={color} name={name} src={src} />
        </div>
      </Atropos>
      <TypesList types={types} />
    </>
  );
};
