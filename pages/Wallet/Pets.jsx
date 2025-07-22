import { useEffect } from "react"

import { Button, LinearProgress, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import { useQuery } from "react-query"
import { base } from "../../Logic/Query"
import DFKATable from "../../Components/Table/DFKATable"
import petColumnDefs from "../../Logic/PetTableColumns"
import MetaMask from "../../Components/Wallet/MetaMask"
import useWallet from "../../Store/WalletStore"
import PetFilters from "../../Components/PetFilters"
import useWalletPets from "../../Store/WalletPets/WalletPetsStore"
import useWalletPetsPersist from "../../Store/WalletPets/WalletPetsPersistStore"
import PetColumnSetups from "../../Components/PetColumnSetups"
import Head from "next/head"
export default function Home() {
  const setPets = useWalletPets((state) => state.setPets)
  const pets = useWalletPets((state) => state.pets)
  const query = useWalletPets((state) => state.query)
  const first = useWalletPets((state) => state.first)
  const skip = useWalletPets((state) => state.skip)
  const setAddress = useWalletPets((state) => state.setAddress)

  const visibilityModel = useWalletPetsPersist((state) => state.visibilityModel)
  const setVisibilityModel = useWalletPetsPersist(
    (state) => state.setVisibilityModel
  )
  const hideColumns = useWalletPetsPersist((state) => state.hideColumns)
  const toggleHideColumns = useWalletPetsPersist(
    (state) => state.toggleHideColumns
  )
  const toggleHideFilters = useWalletPetsPersist(
    (state) => state.toggleHideFilters
  )
  const hideFilters = useWalletPetsPersist((state) => state.hideFilters)
  const petSetup = useWalletPetsPersist((state) => state.petSetup)
  const setPetSetup = useWalletPetsPersist((state) => state.setPetSetup)
  const address = useWallet((state) => state.address)

  const requestPets = async () => {
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
    ["petsRequest", query + first + skip + address],
    async () => {
      if (query.length > 0 && address.length > 0) {
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

  useEffect(() => {
    setAddress(address)
  }, [address])
  return (
    <>
      <Head>
        <title>Wallet Pets - DFKAnaltyics</title>
      </Head>
      <Grid container justifyContent="center" marginBottom={1} spacing={1}>
        <Grid item xs={12} textAlign={"center"}>
          <Typography variant="h5">Your Pets</Typography>
        </Grid>
        <Grid item>
          <MetaMask />
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
            defaultStorageName={"WalletPetsFilterState"}
            visible={hideFilters}
            includeSalePrice={false}
            useStore={useWalletPets}
          ></PetFilters>
        </Grid>
      </Grid>
      {result.isLoading && address !== "" && (
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
