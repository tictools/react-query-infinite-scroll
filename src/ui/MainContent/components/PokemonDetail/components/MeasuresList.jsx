import { Measure } from "./Measure";

export const MeasuresList = ({ height, weight }) => {
  return (
    <ul>
      <Measure measureKey="height" value={height} />
      <Measure measureKey="weight" value={weight} />
    </ul>
  );
};
