import { create } from "zustand";

const useStore = create((set) => ({
  counter: 0,
  actions: {
    increase: () => set((state) => ({ counter: state.counter + 1 })),
    removeAll: () => set({ counter: 0 }),
  },
}));

export const useCounter = () => useStore((state) => state.counter);

export const useCounterActions = () => useStore((state) => state.actions);
