import { Ability } from "./Ability";

export const AbilitiesList = ({ abilities }) => {
  return (
    <ul>
      {abilities.map(({ ability, is_hidden }) => (
        <Ability key={ability.name} name={ability.name} isHidden={is_hidden} />
      ))}
    </ul>
  );
};
