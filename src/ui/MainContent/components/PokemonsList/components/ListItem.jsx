/* eslint-disable react-hooks/exhaustive-deps */
import useStore from "@/store/index";
import { STATE } from "@/store/state";
import styles from "@/ui/MainContent/components/PokemonsList/PokemonsList.module.css";
import { useAutoScroll, useStoreSelectorBy } from "@/ui/MainContent/hooks";
import { useEffect, useRef } from "react";

export const ListItem = ({ name, index }) => {
  const ref = useRef(null);
  const getCurrent = useStore((state) => state.getCurrent);
  const addElementRef = useStoreSelectorBy(STATE.addElementRef);
  const currentIndex = useStoreSelectorBy(STATE.currentIndex);
  const { handleAutoScroll } = useAutoScroll();

  useEffect(() => {
    addElementRef(ref);
    handleAutoScroll();
  }, [ref, currentIndex]);

  const itemClassName =
    currentIndex === index
      ? `${styles["list__item"]} ${styles["list__item--selected"]}`
      : styles["list__item"];

  const handleClick = () => {
    getCurrent(index);
  };

  return (
    <li
      ref={ref}
      data-id={index}
      className={itemClassName}
      onClick={handleClick}
    >
      {name}
    </li>
  );
};
