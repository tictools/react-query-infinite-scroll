import styles from "../PokemonDetail.module.css";
import { Type } from "./Type";

export const TypesList = ({ types }) => {
  return (
    <ul className={styles["artwork__types"]}>
      {types.map((type) => (
        <Type key={type} type={type} />
      ))}
    </ul>
  );
};
