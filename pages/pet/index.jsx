import { useContext, useEffect, useRef, useState } from "react"

import { Button, LinearProgress, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import usePets from "../../Store/pet/PetsStore"
import { useQuery } from "react-query"
import { base, petData } from "../../Logic/Query"
import DFKATable from "../../Components/Table/DFKATable"
import petColumnDefs from "../../Logic/PetTableColumns"
import PetFilters from "../../Components/PetFilters"
import usePetsPersist from "../../Store/pet/PetsPersistStore"
import PetColumnSetups from "../../Components/PetColumnSetups"
import Head from "next/head"
import useUser from "../../Store/UserStore"

export default function Home() {
  const setPets = usePets((state) => state.setPets)
  const pets = usePets((state) => state.pets)
  const query = usePets((state) => state.query)
  const first = usePets((state) => state.first)
  const skip = usePets((state) => state.skip)
  const attempt = usePets((state) => state.attempt)

  const visibilityModel = usePetsPersist((state) => state.visibilityModel)
  const setVisibilityModel = usePetsPersist((state) => state.setVisibilityModel)
  const hideFilters = usePetsPersist((state) => state.hideFilters)
  const toggleHideFilters = usePetsPersist((state) => state.toggleHideFilters)
  const hideColumns = usePetsPersist((state) => state.hideColumns)
  const toggleHideColumns = usePetsPersist((state) => state.toggleHideColumns)
  const petSetup = usePetsPersist((state) => state.petSetup)
  const setPetSetup = usePetsPersist((state) => state.setPetSetup)
  const initiate = useUser((state) => state.initiate)
  const requestPets = async (state) => {
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
    ["petsRequest", attempt + query + first + skip],
    async () => {
      if (query.length > 0) {
        let requestId = query
        let petsRequest = await requestPets()
        if (petsRequest.status >= 200 && petsRequest.status <= 300) {
          let json = await petsRequest.json()
          let pets = json.data.pets
          setPets(pets, requestId)
        }
      }
    }
  )
  return (
    <>
      <Head>
        <title>Pets - DFKAnaltyics</title>
      </Head>
      <Grid
        container
        justifyContent="center"
        marginBottom={1}
        columnSpacing={1}
      >
        <Grid item xs={12} textAlign={"center"}>
          <Typography variant="h5">Pets Tavern</Typography>
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
        <Grid item xs={12}>
          <PetColumnSetups
            visible={hideColumns}
            visibilityModel={visibilityModel}
            setVisibilityModel={setVisibilityModel}
            currentColumnSetup={petSetup}
            setCurrentColumnSetup={setPetSetup}
          />
          <PetFilters
            visible={hideFilters}
            includeSalePrice={true}
            useStore={usePets}
            initiate={initiate}
          ></PetFilters>
        </Grid>
      </Grid>
      {result.isLoading && (
        <LinearProgress style={{ height: 10, margin: "5px 50px" }} />
      )}
      <DFKATable
        rows={pets}
        columns={petColumnDefs}
        columnVisibilityModel={visibilityModel}
        visibilityChanged={setVisibilityModel}
      ></DFKATable>
    </>
  )
}
