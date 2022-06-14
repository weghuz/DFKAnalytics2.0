import { useEffect, useState } from "react";
import create from "zustand";
import { persist } from "zustand/middleware";
import HeroBasePersistStore from "../HeroBase/HeroBasePersistStore";

const useHeroesPersistStore = create(
  persist(
    (set) => ({
      ...HeroBasePersistStore(set),
    }),
    {
      name: "HeroesIndex",
    }
  )
);

const useHeroesPersistInitialStore = create((set) => ({
  ...HeroBasePersistStore(set),
}));

export default function useHeroesPersist(selector, eqFn) {
  const [initiated, setInitiated] = useState(false);
  useEffect(() => {
    setInitiated((init) => true);
  }, [initiated]);
  if (initiated) {
    return useHeroesPersistStore(selector, eqFn);
  } else {
    return useHeroesPersistInitialStore(selector, eqFn);
  }
}
