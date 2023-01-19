import { useQuery } from "react-query"
import HeroFilters from "../../Components/HeroFilters"
import { base } from "../../Logic/Query"
import { Button, LinearProgress, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import { columnDefs } from "../../Logic/GridTableColumns"
import DFKATable from "../../Components/Table/DFKATable"
import useHeroesPersist from "../../Store/hero/HeroesPersistStore"
import useHeroes from "../../Store/hero/HeroesStore"
import useUser from "../../Store/UserStore"
import HeroColumnSetups from "../../Components/HeroColumnSetups"
import Head from "next/head"
import { useState } from "react"
import HeroDetailsModal from "../../Components/Hero/HeroDetailsModal"

export default function Home() {
  const hideColumns = useHeroesPersist((state) => state.hideColumns)
  const toggleHideColumns = useHeroesPersist((state) => state.toggleHideColumns)
  const hideFilters = useHeroesPersist((state) => state.hideFilters)
  const toggleHideFilters = useHeroesPersist((state) => state.toggleHideFilters)
  const visibilityModel = useHeroesPersist((state) => state.visibilityModel)
  const setVisibilityModel = useHeroesPersist(
    (state) => state.setVisibilityModel
  )
  const setHeroSetup = useHeroesPersist((state) => state.setHeroSetup)
  const heroSetup = useHeroesPersist((state) => state.heroSetup)
  const heroes = useHeroes((state) => state.heroes)
  const setHeroes = useHeroes((state) => state.setHeroes)
  const query = useHeroes((state) => state.query)
  const attempt = useHeroes((state) => state.attempt)
  const skip = useHeroes((state) => state.skip)
  const first = useHeroes((state) => state.first)
  const heroDetailsViewType = useUser((state) => state.heroDetailsViewType)
  const initiate = useUser((state) => state.initiate)
  const [showingHero, setShowingHero] = useState((hero) => null)
  const clickedHero = (hero) => {
    if (heroDetailsViewType == "page") {
      window.open(`/hero/${hero.id}`, `_blank`)
    } else {
      setShowingHero((h) => hero)
    }
  }

  const testRequest = async () => {
    return fetch(base, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify({
        query: query
      })
    })
  }

  const result = useQuery(
    ["request", query + attempt + skip + first],
    async () => {
      if (query.length > 0) {
        let requestId = query
        let request = await testRequest()
        if (request.status >= 200 && request.status <= 300) {
          let json = await request.json()
          let data = json.data
          console.log(data.heroes)
          setHeroes(data.heroes, requestId)
        } else {
          console.log("error: ", request)
        }
      }
    }
  )

  return (
    <>
      <Head>
        <title>{`Heroes - DFKAnalytics`}</title>
      </Head>
      <Grid
        container
        justifyContent="center"
        marginBottom={1}
        columnSpacing={2}
      >
        <Grid item xs={12} textAlign={"center"}>
          <Typography variant="h5">Heroes Tavern</Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color={hideFilters ? "primary" : "secondary"}
            onClick={toggleHideFilters}
          >
            Filters
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color={hideColumns ? "primary" : "secondary"}
            onClick={toggleHideColumns}
          >
            Columns
          </Button>
        </Grid>
      </Grid>
      <HeroColumnSetups
        visible={hideColumns}
        visibilityModel={visibilityModel}
        setVisibilityModel={setVisibilityModel}
        currentColumnSetup={heroSetup}
        setCurrentColumnSetup={setHeroSetup}
      />
      <HeroFilters
        includeSalePrice={true}
        visible={hideFilters}
        useStore={useHeroes}
        initiate={initiate}
      />
      {result.isLoading && (
        <LinearProgress style={{ height: 10, margin: "5px 50px" }} />
      )}
      <DFKATable
        rows={heroes}
        columns={columnDefs}
        visibilityChanged={setVisibilityModel}
        columnVisibilityModel={visibilityModel}
        onRowClick={clickedHero}
      />
      <HeroDetailsModal
        hero={showingHero}
        setHero={setShowingHero}
      ></HeroDetailsModal>
    </>
  )
}
