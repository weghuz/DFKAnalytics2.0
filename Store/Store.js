import create from "zustand";
import { persist } from "zustand/middleware";

const useFilterState = create((set, get) => ({
  hideFilters: false,
  toggleFilters: () => set((state) => ({ hideFilters: !state.hideFilters })),
}));

export default useFilterState;
