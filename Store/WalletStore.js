import create from "zustand";
import { persist } from "zustand/middleware";

const initialStore = create((set, get) => ({
  address: "",
  setAddress: (newAddress) => {
    set((state) => {
      return { address: newAddress };
    });
  },
}));
const useWallet = create(
  persist(
    (set, get) => ({
      address: "",
      setAddress: (newAddress) => {
        set((state) => {
          return { address: newAddress };
        });
      },
    }),
    {
      name: "AddressStore",
    }
  )
);

export default (selector, eqFn) => {
  if (typeof window !== "undefined") {
    return useWallet(selector, eqFn);
  } else {
    return initialStore(selector, eqFn);
  }
};
