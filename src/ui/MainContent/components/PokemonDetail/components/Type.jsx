import styles from "../PokemonDetail.module.css";

export const Type = ({ type }) => {
  return (
    <li>
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
