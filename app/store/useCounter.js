import { create } from "zustand";

export const useCounter = create((set) => ({
  count: 0,
  status: "zero",
  increse: () =>
    set((state) => {
      let newCount = (state.count += 1);
      let newStatus =
        newCount > 0 ? "pos" : newCount < 0 ? "neg" : "zero";
      return {
        count: newCount,
        status: newStatus,
      };
    }),
  decrease: () =>
    set((state) => {
      let newCount = (state.count -= 1);
      let newStatus =
        newCount > 0 ? "pos" : newCount < 0 ? "neg" : "zero";
      return {
        count: newCount,
        status: newStatus,
      };
    }),
  reset: () => set(() => ({ count: 0, status: "zero" })),
  newAss: (newCount) =>
    set(() => {
      let newStatus =
        newCount > 0 ? "pos" : newCount < 0 ? "neg" : "zero";
      return {
        count: newCount,
        status: newStatus,
      };
    }),
}));
