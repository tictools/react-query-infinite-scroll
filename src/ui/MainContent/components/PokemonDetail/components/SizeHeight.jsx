import { IconHeight } from "./IconHeight";

import styles from "../PokemonDetail.module.css";

export const SizeHeight = ({ value }) => {
  return (
    <li className={styles["size__item"]}>
      <IconHeight color="#888" size={16} />
      <p>{value}</p>
    </li>
  );
};
