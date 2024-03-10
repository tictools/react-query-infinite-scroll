import { Stat } from "./Stat";

import styles from "../PokemonDetail.module.css";

export const StatsList = ({ stats }) => {
  return (
    <ul className={styles["stat__list"]}>
      {stats.map((stat) => (
        <Stat key={stat.name} stat={stat} />
      ))}
    </ul>
  );
};
