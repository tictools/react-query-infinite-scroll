import { create } from "zustand";

const pokemonsStore = create((set) => {
  return {
    currentIndex: 0,
    getCurrent: (index) => {
      set((state) => ({
        ...state,
        currentIndex: index,
      }));
    },
  };
});

export default pokemonsStore;
