import { usePokemonData } from "@/ui/MainContent/hooks";

export const Counter = () => {
  const { currentLength, count } = usePokemonData();

  return (
    <div>
      {currentLength}/{count}
    </div>
  );
};
