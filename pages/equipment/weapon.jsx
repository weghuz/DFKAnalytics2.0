import { useContext, useEffect, useRef, useState } from "react"

import { Button, LinearProgress, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import useWeapon from "../../Store/weapon/WeaponStore"
import { useQuery } from "react-query"
import { base } from "../../Logic/Query"
import DFKATable from "../../Components/Table/DFKATable"
import weaponColumnDefs from "../../Logic/WeaponTableColumns"
import WeaponFilters from "../../Components/WeaponFilters"
import useWeaponPersist from "../../Store/weapon/WeaponPersistStore"
import WeaponColumnSetups from "../../Components/WeaponColumnSetups"
import Head from "next/head"
import useUser from "../../Store/UserStore"

export default function Home() {
  const setWeapon          = useWeapon((state) => state.setWeapon)
  const weapons            = useWeapon((state) => state.weapons)
  const query              = useWeapon((state) => state.query)
  const first              = useWeapon((state) => state.first)
  const skip               = useWeapon((state) => state.skip)
  const attempt            = useWeapon((state) => state.attempt)

  const visibilityModel    = useWeaponPersist((state) => state.visibilityModel)
  const setVisibilityModel = useWeaponPersist((state) => state.setVisibilityModel)
  const hideFilters        = useWeaponPersist((state) => state.hideFilters)
  const toggleHideFilters  = useWeaponPersist((state) => state.toggleHideFilters)
  const hideColumns        = useWeaponPersist((state) => state.hideColumns)
  const toggleHideColumns  = useWeaponPersist((state) => state.toggleHideColumns)
  const weaponSetup        = useWeaponPersist((state) => state.weaponSetup)
  const setWeaponSetup     = useWeaponPersist((state) => state.setWeaponSetup)
  const initiate           = useUser((state) => state.initiate)
  const requestWeapon      = async (state) => {
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
    ["weaponRequest", query + first + skip],
    async () => {
      if (query.length > 0) {
        let requestId = query
        let weaponRequest = await requestWeapon()
        if (weaponRequest.status >= 200 && weaponRequest.status <= 300) {
          let json = await weaponRequest.json()
          let weapons = json.data.weapons
          setWeapon(weapons, requestId)
        }
      }
    }
  )
  return (
    <>
      <Head>
        <title>Equipment - Weapons - DFKAnaltyics</title>
      </Head>
      <Grid
        container
        justifyContent="center"
        marginBottom={1}
        columnSpacing={1}
      >
        <Grid item xs={12} textAlign={"center"}>
          <Typography variant="h5">Equipment: Weapons</Typography>
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
          <WeaponColumnSetups
            visible={hideColumns}
            visibilityModel={visibilityModel}
            setVisibilityModel={setVisibilityModel}
            currentColumnSetup={weaponSetup}
            setCurrentColumnSetup={setWeaponSetup}
          />
          <WeaponFilters
            visible={hideFilters}
            includeSalePrice={true}
            useStore={useWeapon}
            initiate={initiate}
          ></WeaponFilters>
        </Grid>
      </Grid>
      {result.isLoading && (
        <LinearProgress style={{ height: 10, margin: "5px 50px" }} />
      )}
      <DFKATable
        rows={weapons}
        columns={weaponColumnDefs}
        columnVisibilityModel={visibilityModel}
        visibilityChanged={setVisibilityModel}
      ></DFKATable>
    </>
  )
}
