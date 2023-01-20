import create from "zustand"
import {
  ClassScore,
  getRecessives,
  GrowthScore,
  NormalizeHero,
  TrainStat
} from "../../Logic/HeroBase"
import { heroData } from "../../Logic/Query"

const UpdateQuery = (state) => {
  state.query = `{saleAuctions(first:${state.first},skip:${state.skip},where: {seller: "${state.address}", purchasePrice_gt:"1"}, orderBy:startedAt, orderDirection:desc){id purchasePrice startedAt tokenId ${heroData}}}`
}

const useWalletAuctions = create((set) => ({
  heroes: [],
  first: 100,
  attempt: 0,
  address: ``,
  setAddress: (newAddress) =>
    set((state) => {
      if (state.address == newAddress) return
      state.address = newAddress
      state.setFilter("", "")
    }),
  initiated: false,
  nextAttempt: () =>
    set((state) => {
      state.attempt = state.attempt + 1
    }),
  clearAttempt: () => {
    state.attempt = 0
  },
  filter: ``,
  order: ``,
  setFilter: (filter, order) =>
    set((state) => {
      state.filter = filter
      state.order = order
      state.skip = 0
      state.first = 100
      state.heroes = []
      UpdateQuery(state)
    }),
  skip: 0,
  setSkip: (newSkip) =>
    set((state) => {
      state.skip = newSkip
    }),
  query: ``,
  setHeroes: (newHeroes, query) =>
    set((state) => {
      if (query !== state.query) {
        return
      }
      console.log(newHeroes)
      newHeroes = newHeroes.filter((h) => h != null && h.statGenes != "0")
      newHeroes = newHeroes.filter(
        (nh) => !state.heroes.some((h) => h.id === nh.id)
      )
      console.log(newHeroes)
      if (newHeroes.length == 0) {
        console.log("Finished Query")
        return
      }
      newHeroes.forEach((h) => {
        NormalizeHero(h)
      })
      console.log("New Heroes: ", newHeroes)
      state.skip = state.skip + state.first
      state.first = 1000
      UpdateQuery(state)
      if (state.heroes.length == 0) {
        state.heroes = newHeroes
        return
      }
      state.heroes = state.heroes.concat(newHeroes)
    })
}))

export default useWalletAuctions
