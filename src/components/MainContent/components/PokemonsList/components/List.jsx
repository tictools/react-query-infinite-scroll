import styles from "../PokemonsList.module.css";

export const List = ({ pokemons = [] }) => {
  return (
    <ul className={styles["list"]}>
      {pokemons?.map((pokemon) => (
        <li className={styles["list__item"]} key={pokemon.id}>
          {pokemon.name}
        </li>
      ))}
    </ul>
  );
};
