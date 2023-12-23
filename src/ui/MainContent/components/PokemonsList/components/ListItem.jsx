import useStore from "@/store/index";
import styles from "@/ui/MainContent/components/PokemonsList/PokemonsList.module.css";
import { useAutoScroll, useStoreSelectorBy } from "@/ui/MainContent/hooks";

export const ListItem = ({ name, index }) => {
  const getCurrent = useStore((state) => state.getCurrent);
  const selectedIndex = useStoreSelectorBy("currentIndex");
  const [ref, handleAutoScroll] = useAutoScroll();

  const itemClassName =
    selectedIndex === index
      ? `${styles["list__item"]} ${styles["list__item--selected"]}`
      : styles["list__item"];

  const handleClick = () => {
    getCurrent(index);
    handleAutoScroll();
  };

  return (
    <li ref={ref} className={itemClassName} onClick={handleClick}>
      {name}
    </li>
  );
};
