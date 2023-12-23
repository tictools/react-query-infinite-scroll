import { useCallback } from "react";
import { useStoreSelectorBy } from "./useStoreSelectorBy";

export const useAutoScroll = () => {
  const elementsRef = useStoreSelectorBy("elementsRef");
  const currentIndex = useStoreSelectorBy("currentIndex");

  const handleAutoScroll = useCallback(() => {
    if (!elementsRef[currentIndex]?.current) return;

    elementsRef[currentIndex].current.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [currentIndex, elementsRef]);

  return { handleAutoScroll };
};
