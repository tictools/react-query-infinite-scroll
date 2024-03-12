import styles from "../PokemonDetail.module.css";

export const SizeData = ({ value, children }) => {
  return (
    <li className={styles["size__item"]}>
      <span>{children}</span>
      <span className={styles["size__item--value"]}>{value}</span>
    </li>
  );
};
