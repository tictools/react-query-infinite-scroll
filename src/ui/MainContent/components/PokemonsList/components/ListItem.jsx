import useStore from "@/store/index";
import styles from "@/ui/MainContent/components/PokemonsList/PokemonsList.module.css";
import {
  useAddElementRef,
  useAutoScroll,
  useItemClassName,
} from "@/ui/MainContent/hooks";

export const ListItem = ({ name, index }) => {
  const getCurrent = useStore((state) => state.getCurrent);
  const { ref } = useAddElementRef();
  const { itemClassName } = useItemClassName({ styles, index });

  useAutoScroll({ ref });

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
