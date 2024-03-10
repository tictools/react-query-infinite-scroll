import CircularProgress from "@mui/joy/CircularProgress";

import styles from "../PokemonDetail.module.css";
export const Stat = ({ stat }) => {
  const { name, abbr, value } = stat;

  const MAPPED_VALUE_COLOR = {
    MIN: "danger",
    HALF: "warning",
    NOTABLE: "primary",
    MAX: "success",
  };

  const getColorBy = (value) => {
    const rangesBase255 = [63.75, 127.5, 191.25, 255];
    const keys = Object.keys(MAPPED_VALUE_COLOR);

    const index = rangesBase255.findIndex((range) => value <= range);
    const result = keys[index];

    return MAPPED_VALUE_COLOR[result];
  };

  const normalizeToBase255 = (value) => (value * 100) / 255;

  return (
    <li className={styles["stat__item"]}>
      <p title={name} className={styles["stat__label"]}>{`${abbr}`}</p>
      <CircularProgress
        color={getColorBy(value)}
        determinate
        size="md"
        thickness={6}
        value={normalizeToBase255(value)}
        variant="solid"
      >
        <span className={styles["stat__label"]}>{`${value}`}</span>
      </CircularProgress>
    </li>
  );
};
