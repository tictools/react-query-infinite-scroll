import useStore from "@/store";
import { useShallow } from "zustand/react/shallow";

export const useStoreSelectorBy = (storeKey) => {
  const shallowSelector = useShallow((state) => state[storeKey]);
  return useStore(shallowSelector);
};
