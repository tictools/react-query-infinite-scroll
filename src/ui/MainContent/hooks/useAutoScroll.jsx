import { useStoreSelectorBy } from "@/ui/MainContent/hooks";
import { useCallback } from "react";

export const useAutoScroll = () => {
  const elementsRef = useStoreSelectorBy("elementsRef");
  const currentIndex = useStoreSelectorBy("currentIndex");

  const handleAutoScroll = useCallback(() => {
    if (!elementsRef[currentIndex]?.current) return;

    elementsRef[currentIndex].current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [currentIndex, elementsRef]);

  return { handleAutoScroll };
};
