export const Measure = ({ measureKey, value }) => {
  return (
    <li>
      <p>{`${measureKey}: ${value}`}</p>
    </li>
  );
};
