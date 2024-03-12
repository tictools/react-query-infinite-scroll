import styles from "../PokemonDetail.module.css";
import { IconHeight } from "./IconHeight";
import { IconWeight } from "./IconWeight";

export const SizeInfo = ({ height, weight }) => {
  const iconLeftClassName = `${styles["size__item-icon"]} ${styles["size__item-info--left"]}`;
  const iconRightClassName = `${styles["size__item-icon"]} ${styles["size__item-info--right"]}`;

  const valueLeftClassName = `${styles["size__item-value"]} ${styles["size__item-info--left"]}`;
  const valueRightClassName = `${styles["size__item-value"]} ${styles["size__item-info--right"]}`;

  return (
    <ul className={styles["size__container"]}>
      <li className={`${styles["size__item"]} ${styles["size__item--left"]}`}>
        <span className={iconLeftClassName}>
          <IconHeight color="#fff" size={20} />
        </span>
        <span className={valueRightClassName}>{height}</span>
      </li>
      <li className={`${styles["size__item"]} ${styles["size__item--right"]}`}>
        <span className={valueLeftClassName}>{weight}</span>
        <span className={iconRightClassName}>
          <IconWeight color="#fff" size={20} />
        </span>
      </li>
    </ul>
  );
};
