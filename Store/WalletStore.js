import create from "zustand";

const useWallet = create((set, get) => ({
  address: "",
  setAddress: (newAddress) => {
    set((state) => {
      console.log(`store ${newAddress}`);
      return { address: newAddress };
    });
  },
}));
export default useWallet;
