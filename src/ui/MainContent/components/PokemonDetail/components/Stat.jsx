export const Stat = ({ stat }) => {
  return (
    <li>
      <p>{`${stat.name}: ${stat.base}`} </p>
    </li>
  );
};
