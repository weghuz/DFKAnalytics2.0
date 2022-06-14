import { useEffect, useState } from "react";
import create from "zustand";
import { persist } from "zustand/middleware";
import PetsPersistBaseStore from "../PetsBase/PetsBasePersistStore";

const useWalletPetsPersistStore = create(
  persist(
    (set) => ({
      ...PetsPersistBaseStore(set),
    }),
    {
      name: "PetsWallet",
    }
  )
);

const useWalletPetsPersistInitialStore = create((set) => ({
  ...PetsPersistBaseStore(set),
}));

export default function useWalletPetsPersist(selector, eqFn) {
  const [initiated, setInitiated] = useState(false);
  useEffect(() => {
    setInitiated((init) => true);
  }, [initiated]);
  if (initiated) {
    return useWalletPetsPersistStore(selector, eqFn);
  } else {
    return useWalletPetsPersistInitialStore(selector, eqFn);
  }
}
