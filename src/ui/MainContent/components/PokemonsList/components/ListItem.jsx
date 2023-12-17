import useStore from "@/store/index";
import { useStoreSelectorBy } from "@/ui/MainContent/hooks";
import styles from "../PokemonsList.module.css";

export const ListItem = ({ name, index }) => {
  const getCurrent = useStore((state) => state.getCurrent);
  const selectedIndex = useStoreSelectorBy("currentIndex");

  const itemClassName =
    selectedIndex === index
      ? `${styles["list__item"]} ${styles["list__item--selected"]}`
      : styles["list__item"];
  const handleClick = () => {
    getCurrent(index);
  };

  return (
    <li className={itemClassName} onClick={handleClick}>
      {name}
    </li>
  );
};
