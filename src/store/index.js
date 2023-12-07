import { create } from "zustand";

const pokemonsStore = create((set, get) => {
  return {
    prev: get().current - 1,
    current: 0,
    next: get().current + 1,
    getNext: () => set((state) => ({ current: state.next })),
  };
});

export default pokemonsStore;
