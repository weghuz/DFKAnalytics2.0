import { useEffect, useState } from "react";
import create from "zustand";
import { persist } from "zustand/middleware";
import { BaseHeroVisibilityModels } from "../Logic/BaseVisibilityModels";

const PersistedStore = create(
  persist(
    (set) => ({
      savedHeroColumnSetups: BaseHeroVisibilityModels,
      saveHeroColumnSetup: (columnSetup) => {
        set((state) => {
          if (
            state.savedHeroColumnSetups.some((s) => s.name === columnSetup.name)
          ) {
            return;
          }
          return {
            savedHeroColumnSetups: [
              ...state.savedHeroColumnSetups,
              columnSetup,
            ],
          };
        });
      },
      removeHeroColumnSetup: (columnSetup) => {
        set((state) => {
          if (
            state.savedHeroColumnSetups.some((s) => s.name === columnSetup.name)
          ) {
            return;
          }
          return {
            savedHeroColumnSetups: state.savedHeroColumnSetups.filter(
              (s, i) => s.name !== columnSetup.name
            ),
          };
        });
        return BaseHeroVisibilityModels[0];
      },
      address: "",
      theme: "dark",
      toggleTheme: () => {
        set((state) => {
          state.theme = state.theme == "light" ? "dark" : "light";
        });
      },
    }),
    {
      name: "UserSettings",
    }
  )
);

const PersistedStoreInit = create(
  (set) => ({
    currentHeroColumnSetup: BaseHeroVisibilityModels[0].name,
    setCurrentColumnSetup: (currentColumnSetup) =>
      set((state) => {
        return {
          currentHeroColumnSetup: savedHeroColumnSetups.find(
            (s) => s.name === currentColumnSetup
          ),
        };
      }),
    savedHeroColumnSetups: BaseHeroVisibilityModels,
    saveHeroColumnSetup: (columnSetup) => {
      if (state.savedHeroColumnSetups.some((s) => s.name === columnSetup)) {
        return;
      }
      set((state) => {
        return { savedHeroColumnSetups: [...savedColumnSetups, columnSetup] };
      });
    },
    removeHeroColumnSetup: () => {
      if (state.currentHeroColumnSetup !== "Default") {
        return;
      }
      set((state) => {
        return {
          savedColumnSetups: savedColumnSetups.filter(
            (s, i) => s.name !== state.currentHeroColumnSetup
          ),
          currentHeroColumnSetup: BaseHeroVisibilityModels[0].name,
        };
      });
    },
    address: "",
    theme: "dark",
    toggleTheme: () => {
      set((state) => {
        state.theme = state.theme == "light" ? "dark" : "light";
      });
    },
  }),
  {
    name: "UserSettings",
  }
);

export default function useUser(selector, eqFn) {
  const [initiated, setInitiated] = useState(false);
  useEffect(() => {
    setInitiated((init) => true);
  }, [initiated]);
  if (initiated) {
    return PersistedStore(selector, eqFn);
  } else {
    return PersistedStoreInit(selector, eqFn);
  }
}
