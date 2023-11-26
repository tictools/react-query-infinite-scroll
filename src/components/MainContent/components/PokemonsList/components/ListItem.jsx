import styles from "../PokemonsList.module.css";

export const ListItem = ({ pokemon }) => {
  return (
    <li className={styles["list__item"]} key={pokemon.id}>
      {pokemon.name}
    </li>
  );
};
