import { Ability } from "./Ability";

import styles from "../PokemonDetail.module.css";

export const AbilitiesList = ({ abilities }) => {
  return (
    <ul className={styles["abilities__container"]}>
      {abilities.map(({ ability, is_hidden }) => (
        <Ability key={ability.name} name={ability.name} isHidden={is_hidden} />
      ))}
    </ul>
  );
};
