/* eslint-disable react-hooks/exhaustive-deps */

import { STATE } from "@/store/state";
import { useStoreSelectorBy } from "@/ui/MainContent/hooks";
import { useCallback, useEffect } from "react";

export const useAutoScroll = ({ ref }) => {
  const elementsRef = useStoreSelectorBy(STATE.elementsRef);
  const currentIndex = useStoreSelectorBy(STATE.currentIndex);

  const handleAutoScroll = useCallback(() => {
    if (!elementsRef[currentIndex]?.current) return;

    elementsRef[currentIndex].current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [currentIndex, elementsRef]);

  useEffect(() => {
    handleAutoScroll();
  }, [ref, currentIndex]);
};
