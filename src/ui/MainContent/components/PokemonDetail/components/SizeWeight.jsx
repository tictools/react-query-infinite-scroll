import { IconWeight } from "./IconWeight";

import styles from "../PokemonDetail.module.css";

export const SizeWeight = ({ value }) => {
  return (
    <li className={styles["size__item"]}>
      <IconWeight color="#888" size={16} />
      <p>{value}</p>
    </li>
  );
};
