import { useEffect, useState } from "react";
import create from "zustand";
import { persist } from "zustand/middleware";
import WeaponBasePersistStore from "../WeaponBase/WeaponBasePersistStore";

const useWeaponPersistStore = create(
  persist(
    (set) => ({
      ...WeaponBasePersistStore(set),
    }),
    {
      name: "WeaponIndex",
    }
  )
);

const useWeaponPersistInitialStore = create((set) => ({
  ...WeaponBasePersistStore(set),
}));

export default function useWeaponPersist(selector, eqFn) {
  const [initiated, setInitiated] = useState(false);
  useEffect(() => {
    setInitiated((init) => true);
  }, [initiated]);
  if (initiated) {
    return useWeaponPersistStore(selector, eqFn);
  } else {
    return useWeaponPersistInitialStore(selector, eqFn);
  }
}
