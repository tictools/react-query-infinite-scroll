import { create } from "zustand";

const pokemonsStore = create((set, get) => {
  return {
    currentIndex: 0,
    getCurrent: (index) => {
      set((state) => ({
        ...state,
        currentIndex: index,
      }));
    },

    getPrev: (currentLength) => {
      const prevIndex =
        get().currentIndex - 1 < 0 ? currentLength - 1 : get().currentIndex - 1;

      set((state) => ({
        ...state,
        currentIndex: prevIndex,
      }));
    },

    getNext: (currentLength) => {
      const nextIndex =
        get().currentIndex + 1 > currentLength - 1 ? 0 : get().currentIndex + 1;

      set((state) => ({
        ...state,
        currentIndex: nextIndex,
      }));
    },
  };
});

export default pokemonsStore;
