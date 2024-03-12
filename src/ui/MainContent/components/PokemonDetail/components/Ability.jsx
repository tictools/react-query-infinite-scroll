import { IconVisibilityOff } from "./IconVisibilityOff";
import { IconVisibilityOn } from "./IconVisibilityOn";

import styles from "../PokemonDetail.module.css";

export const Ability = ({ name, isHidden }) => {
  const SIZE = 16;
  return (
    <li className={styles["ability__item"]}>
      <p>{name}</p>
      {isHidden ? (
        <IconVisibilityOff color="#909090" size={SIZE} />
      ) : (
        <IconVisibilityOn color="#808080" size={SIZE} />
      )}
    </li>
  );
};
