import useStore from "@/store/index";
import styles from "../PokemonsList.module.css";

export const ListItem = ({ name, index }) => {
  const getCurrent = useStore((state) => state.getCurrent);

  const handleClick = () => {
    getCurrent(index);
  };

  return (
    <li className={styles["list__item"]} onClick={handleClick}>
      {name}
    </li>
  );
};
