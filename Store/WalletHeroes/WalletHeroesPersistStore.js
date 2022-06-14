import { useEffect, useState } from "react";
import create from "zustand";
import { persist } from "zustand/middleware";
import HeroBasePersistStore from "../HeroBase/HeroBasePersistStore";

const useWalletHeroesPersistStore = create(
  persist(
    (set) => ({
      ...HeroBasePersistStore(set),
    }),
    {
      name: "HeroesWallet",
    }
  )
);

const useWalletHeroesPersistInitialStore = create((set) => ({
  ...HeroBasePersistStore(set),
}));

export default function useWalletHeroesPersist(selector, eqFn) {
  const [initiated, setInitiated] = useState(false);
  useEffect(() => {
    setInitiated((init) => true);
  }, [initiated]);
  if (initiated) {
    return useWalletHeroesPersistStore(selector, eqFn);
  } else {
    return useWalletHeroesPersistInitialStore(selector, eqFn);
  }
}
