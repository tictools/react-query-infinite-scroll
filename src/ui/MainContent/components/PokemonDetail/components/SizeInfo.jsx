import { SizeHeight } from "./SizeHeight";
import { SizeWeight } from "./SizeWeight";

import styles from "../PokemonDetail.module.css";

export const SizeInfo = ({ height, weight }) => {
  return (
    <ul className={styles["size__container"]}>
      <SizeHeight measureKey="height" value={height} />
      <SizeWeight measureKey="weight" value={weight} />
    </ul>
  );
};
