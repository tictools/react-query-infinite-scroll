/* eslint-disable react-hooks/exhaustive-deps */

import { useStoreSelectorBy } from "@/ui/MainContent/hooks";
import { useEffect, useRef } from "react";

import { STATE } from "@/store/state";

export const useAddElementRef = () => {
  const ref = useRef(null);
  const addElementRef = useStoreSelectorBy(STATE.addElementRef);
  const currentIndex = useStoreSelectorBy(STATE.currentIndex);

  useEffect(() => {
    addElementRef(ref);
  }, [ref, currentIndex]);

  return { ref };
};
