import { Type } from "./Type";

export const TypesList = ({ types }) => {
  return (
    <ul>
      {types.map((type) => (
        <Type key={type} type={type} />
      ))}
    </ul>
  );
};
