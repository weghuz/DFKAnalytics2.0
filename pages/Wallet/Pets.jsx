import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { Button, LinearProgress, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import usePets from "../../Store/PetsStore";
import { useQuery } from "react-query";
import { base, petData } from "../../Logic/Query";
import DFKATable from "../../Components/Table/DFKATable";
import petColumnDefs from "../../Logic/PetTableColumns";
import useWalletPets from "../../Store/WalletPetsStore";
import MetaMask from "../../Components/Wallet/MetaMask";
import { SettingsBackupRestoreOutlined } from "@mui/icons-material";
import useWallet from "../../Store/WalletStore";
import PetFilters from "../../Components/PetFilters";

export default function Home() {
  const setPets = useWalletPets((state) => state.setPets);
  const pets = useWalletPets((state) => state.pets);
  const query = useWalletPets((state) => state.query);
  const setQuery = useWalletPets((state) => state.setQuery);
  const first = useWalletPets((state) => state.first);
  const setSkip = useWalletPets((state) => state.setSkip);
  const skip = useWalletPets((state) => state.skip);
  const visibilityModel = useWalletPets((state) => state.visibilityModel);
  const setVisibilityModel = useWalletPets((state) => state.setVisibilityModel);
  const hideFilters = useWalletPets((state) => state.hideFilters);
  const toggleFilters = useWalletPets((state) => state.toggleFilters);
  const address = useWallet((state) => state.address);
  const filter = useWalletPets((state) => state.filter);
  const setFilter = useWalletPets((state) => state.setFilter);
  const order = useWalletPets((state) => state.order);
  const setOrder = useWalletPets((state) => state.setOrder);
  const setAddress = useWalletPets((state) => state.setAddress);

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
    ["petsRequest", query + first + skip + address],
    async () => {
      if (query.length > 0 && address.length > 0) {
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
    let filterVisible = JSON.parse(
      localStorage.getItem("PetsWalletFilterVisible")
    );
    if (hideFilters != filterVisible && filterVisible !== null) {
      toggleFilters();
    }
    let columnsVisibilityModel = JSON.parse(
      localStorage.getItem("PetsWalletVisiblityModel")
    );
    if (columnsVisibilityModel !== null) {
      setVisibilityModel(columnsVisibilityModel);
    }
  }, []);
  useEffect(() => {
    setAddress(address);
  }, [address]);
  return (
    <>
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
            onClick={toggleFilters}
          >
            Filters
          </Button>
        </Grid>
        <Grid item xs={12}>
          <PetFilters
            visible={hideFilters}
            includeSalePrice={false}
            setFilter={setFilter}
            setOrder={setOrder}
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
  );
}
