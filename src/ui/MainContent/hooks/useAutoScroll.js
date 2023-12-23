import { useRef } from "react";

export const useAutoScroll = () => {
  const ref = useRef();

  const handleAutoScroll = () => {
    if (!ref.current) return;

    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return [ref, handleAutoScroll];
};
