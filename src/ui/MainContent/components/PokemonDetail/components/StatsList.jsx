import { Stat } from "./Stat";

export const StatsList = ({ stats }) => {
  return (
    <ul>
      {stats.map((stat) => (
        <Stat key={stat.name} stat={stat} />
      ))}
    </ul>
  );
};
