import { usePokemonsData } from "@/ui/MainContent/hooks";

export const Counter = () => {
  const { currentLength, count } = usePokemonsData();

  return (
    <div>
      {currentLength}/{count}
    </div>
  );
};
