export const Ability = ({ name, isHidden }) => {
  return (
    <li>
      <p>{`${name}: ${isHidden}`} </p>
    </li>
  );
};
