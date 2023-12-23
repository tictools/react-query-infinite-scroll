/* eslint-disable react-hooks/exhaustive-deps */
import useStore from "@/store/index";
import styles from "@/ui/MainContent/components/PokemonsList/PokemonsList.module.css";
import { useAutoScroll, useStoreSelectorBy } from "@/ui/MainContent/hooks";
import { useEffect, useRef } from "react";

export const ListItem = ({ name, index }) => {
  const ref = useRef(null);
  const { handleAutoScroll } = useAutoScroll();

  const selectedIndex = useStoreSelectorBy("currentIndex");
  const getCurrent = useStore((state) => state.getCurrent);
  const addElementRef = useStoreSelectorBy("addElementRef");

  useEffect(() => {
    addElementRef(ref);
  }, [ref]);

  const itemClassName =
    selectedIndex === index
      ? `${styles["list__item"]} ${styles["list__item--selected"]}`
      : styles["list__item"];

  const handleClick = () => {
    getCurrent(index);
    handleAutoScroll();
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
