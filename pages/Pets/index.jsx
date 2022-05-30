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
  const setQuery = usePets((state) => state.setQuery);
  const first = usePets((state) => state.first);
  const setSkip = usePets((state) => state.setSkip);
  const skip = usePets((state) => state.skip);
  const visibilityModel = usePets((state) => state.visibilityModel);
  const setVisibilityModel = usePets((state) => state.setVisibilityModel);
  const hideFilters = usePets((state) => state.hideFilters);
  const toggleFilters = usePets((state) => state.toggleFilters);
  const filter = usePets((state) => state.filter);
  const setFilter = usePets((state) => state.setFilter);
  const order = usePets((state) => state.order);
  const setOrder = usePets((state) => state.setOrder);

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
    ["petsRequest", query + first + skip],
    async () => {
      const petsRes = await requestPets();
      return await petsRes.json();
    },
    {
      onSuccess: async (result) => {
        let data = result.data;

        if (data == null) {
          return;
        }
        let pets = data.pets;
        if (first == data.pets.length) {
        }
        setPets(pets, false);
      },
    }
  );
  useEffect(() => {
    let filterVisible = JSON.parse(
      localStorage.getItem("PetsIndexFilterVisible")
    );
    if (hideFilters != filterVisible && filterVisible !== null) {
      toggleFilters();
    }
    let columnsVisibilityModel = JSON.parse(
      localStorage.getItem("PetsIndexVisiblityModel")
    );
    if (columnsVisibilityModel !== null) {
      setVisibilityModel(columnsVisibilityModel);
    }
  }, []);
  useEffect(() => {
    if (skip + first == pets.length) {
      setSkip(skip + first);
      setQuery(
        `{pets(first:${first},skip:${skip},${
          filter.length > 0 ? `where:{${filter}}` : ``
        },${order})${petData}}`
      );
    }
    if (pets.length == 0) {
      setQuery(
        `{pets(first:${first},skip:${skip},${
          filter.length > 0 ? `where:{${filter}}` : ``
        },${order})${petData}}`
      );
    }
    console.log(
      `{pets(first:${first},skip:${skip},${
        filter.length > 0 ? `where:{${filter}}` : ``
      },${order})${petData}}`
    );
  }, [pets, filter, order, petData]);
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
      {pets.length > 0 && (
        <DFKATable
          rows={pets}
          columns={petColumnDefs}
          columnVisibilityModel={visibilityModel}
          visibilityChanged={setVisibilityModel}
        ></DFKATable>
      )}
    </>
  );
}
