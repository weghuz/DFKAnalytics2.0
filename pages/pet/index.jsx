import { useContext, useEffect, useRef, useState } from "react";

import { Button, LinearProgress, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import usePets from "../../Store/PetsStore";
import { useQuery } from "react-query";
import { base, petData } from "../../Logic/Query";
import DFKATable from "../../Components/Table/DFKATable";
import petColumnDefs from "../../Logic/PetTableColumns";
import useWallet from "../../Store/WalletStore";
import PetFilters from "../../Components/PetFilters";

export default function Home() {
  const setPets = usePets((state) => state.setPets);
  const pets = usePets((state) => state.pets);
  const query = usePets((state) => state.query);
  const first = usePets((state) => state.first);
  const skip = usePets((state) => state.skip);
  const visibilityModel = usePets((state) => state.visibilityModel);
  const setVisibilityModel = usePets((state) => state.setVisibilityModel);
  const hideFilters = usePets((state) => state.hideFilters);
  const toggleFilters = usePets((state) => state.toggleFilters);
  const setFilter = usePets((state) => state.setFilter);
  const setOrder = usePets((state) => state.setOrder);
  const attempt = usePets((state) => state.attempt);
  const initiateStore = usePets((state) => state.initiateStore);

  const requestPets = async (state) => {
    return fetch(base, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        query: query,
      }),
    });
  };
  const result = useQuery(
    ["petsRequest", attempt + query + first + skip],
    async () => {
      if (query.length > 0) {
        let petsRequest = await requestPets();
        if (petsRequest.status >= 200 && petsRequest.status <= 300) {
          let json = await petsRequest.json();
          let pets = json.data.pets;
          setPets(pets, false);
        }
      }
    }
  );
  useEffect(() => {
    initiateStore();
  }, []);
  return (
    <>
      <Grid container justifyContent="center" marginBottom={1}>
        <Grid item xs={12} textAlign={"center"}>
          <Typography variant="h5">Pets Tavern</Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color={hideFilters ? "primary" : "secondary"}
            onClick={toggleFilters}
          >
            Filters
          </Button>
        </Grid>
        <Grid item xs={12}>
          <PetFilters
            visible={hideFilters}
            includeSalePrice={true}
            setFilter={setFilter}
            setOrder={setOrder}
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
  );
}
