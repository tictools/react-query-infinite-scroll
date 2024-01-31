import styles from "../PokemonDetail.module.css";

export const Type = ({ type }) => {
  return <li>{<p className={styles["artwork__type"]}>{type} </p>}</li>;
};
