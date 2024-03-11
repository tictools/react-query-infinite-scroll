import styles from "../PokemonDetail.module.css";

export const Type = ({ type }) => {
  return (
    <li className={styles["artwork__type-item"]}>
      {
        <p
          className={`${styles["artwork__type"]} ${
            styles[`artwork__type-${type}`]
          }`}
        >
          {type}{" "}
        </p>
      }
    </li>
  );
};
