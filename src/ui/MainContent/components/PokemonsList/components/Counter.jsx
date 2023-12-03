import { usePokemonData } from "../hooks/usePokemonData";

export const Counter = () => {
  const { currentLength, count } = usePokemonData();

  return (
    <div>
      {currentLength}/{count}
    </div>
  );
};
