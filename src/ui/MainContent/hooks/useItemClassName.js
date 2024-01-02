import { STATE } from "@/store/state";
import { useStoreSelectorBy } from "@/ui/MainContent/hooks";

export const useItemClassName = ({ styles, index }) => {
  const currentIndex = useStoreSelectorBy(STATE.currentIndex);

  const itemClassName =
    currentIndex === index
      ? `${styles["list__item"]} ${styles["list__item--selected"]}`
      : styles["list__item"];

  return { itemClassName };
};
