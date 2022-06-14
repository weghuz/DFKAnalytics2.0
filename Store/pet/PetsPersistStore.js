import { useEffect, useState } from "react";
import create from "zustand";
import { persist } from "zustand/middleware";
import PetsBasePersistStore from "../PetsBase/PetsBasePersistStore";

const usePetsPersistStore = create(
  persist(
    (set) => ({
      ...PetsBasePersistStore(set),
    }),
    {
      name: "PetsIndex",
    }
  )
);

const usePetsPersistInitialStore = create((set) => ({
  ...PetsBasePersistStore(set),
}));

export default function usePetsPersist(selector, eqFn) {
  const [initiated, setInitiated] = useState(false);
  useEffect(() => {
    setInitiated((init) => true);
  }, [initiated]);
  if (initiated) {
    return usePetsPersistStore(selector, eqFn);
  } else {
    return usePetsPersistInitialStore(selector, eqFn);
  }
}
