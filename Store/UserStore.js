import { useEffect, useState } from "react"
import create from "zustand"
import { persist } from "zustand/middleware"
import { BaseHeroVisibilityModels } from "../Logic/BaseHeroVisibilityModels"
import { BasePetVisibilityModels } from "../Logic/BasePetVisibilityModels"

const PersistedStore = create(
  persist(
    (set) => ({
      savedHeroColumnSetups: BaseHeroVisibilityModels,
      saveHeroColumnSetup: (columnSetup) => {
        set((state) => {
          if (
            state.savedHeroColumnSetups.some((s) => s.name === columnSetup.name)
          ) {
            return
          }
          return {
            savedHeroColumnSetups: [...state.savedHeroColumnSetups, columnSetup]
          }
        })
      },
      removeHeroColumnSetup: (columnSetup) => {
        set((state) => {
          if (BaseHeroVisibilityModels.some((s) => s.name === columnSetup)) {
            return
          }
          return {
            savedHeroColumnSetups: state.savedHeroColumnSetups.filter(
              (s, i) => s.name !== columnSetup
            )
          }
        })
      },
      savedPetColumnSetups: BasePetVisibilityModels,
      savePetColumnSetup: (columnSetup) => {
        set((state) => {
          if (
            state.savedPetColumnSetups.some((s) => s.name === columnSetup.name)
          ) {
            return
          }
          return {
            savedPetColumnSetups: [...state.savedPetColumnSetups, columnSetup]
          }
        })
      },
      removePetColumnSetup: (columnSetup) => {
        set((state) => {
          if (BasePetVisibilityModels.some((s) => s.name === columnSetup)) {
            return
          }
          return {
            savedPetColumnSetups: state.savedPetColumnSetups.filter(
              (s, i) => s.name !== columnSetup
            )
          }
        })
      },
      address: "",
      theme: "dark",
      toggleTheme: () => {
        set((state) => {
          state.theme = state.theme == "light" ? "dark" : "light"
        })
      },
      initiate: false,
      toggleInitiate: () => {
        set((state) => {
          state.initiate = !state.initiate
        })
      },
      heroDetailsViewType: "Modal",
      toggleHeroDetailsViewType: () => {
        set((state) => {
          state.heroDetailsViewType =
            state.heroDetailsViewType == "Modal" ? "Page" : "Modal"
        })
      },
      visualDisplayType: [{ label: "Name", value: "Name" }],
      setVisualDisplayType: (visualDisplayType) => {
        set((state) => (state.visualDisplayType = visualDisplayType))
      }
    }),
    {
      name: "UserSettings"
    }
  )
)

const PersistedStoreInit = create(
  (set) => ({
    currentHeroColumnSetup: BaseHeroVisibilityModels[0].name,
    setCurrentColumnSetup: (currentColumnSetup) =>
      set((state) => {
        return {
          currentHeroColumnSetup: savedHeroColumnSetups.find(
            (s) => s.name === currentColumnSetup
          )
        }
      }),
    savedHeroColumnSetups: BaseHeroVisibilityModels,
    saveHeroColumnSetup: (columnSetup) => {
      if (state.savedHeroColumnSetups.some((s) => s.name === columnSetup)) {
        return
      }
      set((state) => {
        return { savedHeroColumnSetups: [...savedColumnSetups, columnSetup] }
      })
    },
    savedPetColumnSetups: BasePetVisibilityModels,
    savePetColumnSetup: (columnSetup) => {
      set((state) => {
        if (
          state.savedPetColumnSetups.some((s) => s.name === columnSetup.name)
        ) {
          return
        }
        return {
          savedPetColumnSetups: [...state.savedPetColumnSetups, columnSetup]
        }
      })
    },
    removePetColumnSetup: (columnSetup) => {
      set((state) => {
        if (BasePetVisibilityModels.some((s) => s.name === columnSetup)) {
          return
        }
        return {
          savedPetColumnSetups: state.savedPetColumnSetups.filter(
            (s, i) => s.name !== columnSetup
          )
        }
      })
    },
    removeHeroColumnSetup: () => {
      if (state.currentHeroColumnSetup !== "Default") {
        return
      }
      set((state) => {
        return {
          savedColumnSetups: savedColumnSetups.filter(
            (s, i) => s.name !== state.currentHeroColumnSetup
          ),
          currentHeroColumnSetup: BaseHeroVisibilityModels[0].name
        }
      })
    },
    address: "",
    theme: "dark",
    toggleTheme: () => {
      set((state) => {
        state.theme = state.theme == "light" ? "dark" : "light"
      })
    },
    initiate: false,
    toggleInitiate: () => {
      set((state) => {
        state.initiate = !state.initiate
      })
    },
    heroDetailsViewType: "modal",
    toggleHeroDetailsViewType: () => {
      set((state) => {
        state.heroDetailsViewType =
          state.heroDetailsViewType == "modal" ? "page" : "modal"
      })
    },
    visualDisplayType: [{ label: "Name", value: "Name" }],
    setVisualDisplayType: (visualDisplayType) => {
      set((state) => (state.visualDisplayType = visualDisplayType))
    }
  }),
  {
    name: "UserSettings"
  }
)

export default function useUser(selector, eqFn) {
  const [initiated, setInitiated] = useState(false)
  useEffect(() => {
    setInitiated((init) => true)
  }, [initiated])
  if (initiated) {
    return PersistedStore(selector, eqFn)
  } else {
    return PersistedStoreInit(selector, eqFn)
  }
}
