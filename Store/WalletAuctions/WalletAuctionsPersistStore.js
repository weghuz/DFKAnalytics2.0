import { useEffect, useState } from "react";
import create from "zustand";
import { persist } from "zustand/middleware";
import HeroBasePersistStore from "../HeroBase/HeroBasePersistStore";

const useWalletAuctionsPersistStore = create(
  persist(
    (set) => ({
      ...HeroBasePersistStore(set),
    }),
    {
      name: "AuctionsWallet",
    }
  )
);

const useWalletAuctionsPersistInitialStore = create((set) => ({
  ...HeroBasePersistStore(set),
}));

export default function useWalletAuctionsPersist(selector, eqFn) {
  const [initiated, setInitiated] = useState(false);
  useEffect(() => {
    setInitiated((init) => true);
  }, [initiated]);
  if (initiated) {
    return useWalletAuctionsPersistStore(selector, eqFn);
  } else {
    return useWalletAuctionsPersistInitialStore(selector, eqFn);
  }
}
