const addElementRef = (set) => (ref) => {
  set((state) => {
    const updatedElementsRef = new Set([...state.elementsRef, ref]);

    return {
      ...state,
      elementsRef: Array.from(updatedElementsRef),
    };
  });
};

const getCurrent = (set, key) => (index) => {
  set((state) => ({
    ...state,
    [key]: index,
  }));
};

const getPrev = (set, get, key) => (currentLength) => {
  const index = get()[key];

  const prevIndex = index - 1 < 0 ? currentLength - 1 : index - 1;

  set((state) => ({
    ...state,
    [key]: prevIndex,
  }));
};

const getNext = (set, get, key) => (currentLength) => {
  const index = get()[key];

  const nextIndex = index + 1 > currentLength - 1 ? 0 : index + 1;

  set((state) => ({
    ...state,
    [key]: nextIndex,
  }));
};

export const ACTIONS_STATE = {
  addElementRef,
  getCurrent,
  getNext,
  getPrev,
};
