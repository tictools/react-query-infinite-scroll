import { create } from "zustand";
import { ACTIONS_STATE } from "./actions";
import { INITIAL_STATE } from "./initialState";
import { STATE } from "./state";

const useStore = create((set, get) => ({
  [STATE.currentIndex]: INITIAL_STATE.currentIndex,

  [STATE.elementsRef]: INITIAL_STATE.elementsRef,

  [STATE.addElementRef]: ACTIONS_STATE.addElementRef(set),

  [STATE.getCurrent]: ACTIONS_STATE.getCurrent(set, STATE.currentIndex),

  [STATE.getPrev]: ACTIONS_STATE.getPrev(set, get, STATE.currentIndex),

  [STATE.getNext]: ACTIONS_STATE.getNext(set, get, STATE.currentIndex),
}));

export default useStore;
