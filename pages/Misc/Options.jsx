import {
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Select,
} from "@mui/material";
import Head from "next/head";
import SelectItemSingle from "../../Components/Filters/SelectItemSingle";
import useUser from "../../Store/UserStore";

export default function Options() {
  const ClearLocalStorage = () => {
    localStorage.clear();
    alert("Local Storage Cleared.");
  };
  const heroDetailsViewType = useUser((state) => state.heroDetailsViewType);
  const toggleHeroDetailsViewType = useUser(
    (state) => state.toggleHeroDetailsViewType
  );
  const visualDisplayType = useUser((state) => state.visualDisplayType);
  const setVisualDisplayType = useUser((state) => state.setVisualDisplayType);
  return (
    <>
      <Head>
        <title>{`Options - DFKAnalytics`}</title>
      </Head>
      <Container>
        <Grid container columnSpacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4">Options</Typography>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={5} sx={{ padding: 1 }}>
              <Grid container columnSpacing={1}>
                <Grid item xs={6}>
                  <Typography variant="h5">Hero Details Type</Typography>
                  <Box>{heroDetailsViewType}</Box>
                  <Button onClick={toggleHeroDetailsViewType}>
                    Toggle Hero Details Type
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h5">Visuals Gene Display ({visualDisplayType[0].value})</Typography>
                  <SelectItemSingle
                    title={"Visual Gene Display"}
                    clearable={false}
                    values={[{ label: "Name", value: "Name" }]}
                    setValues={setVisualDisplayType}
                  >
                    {[
                      { label: "Name", value: "Name" },
                      { label: "Raw", value: "Raw" },
                      { label: "Tier", value: "Tier" },
                    ]}
                  </SelectItemSingle>
                </Grid>
                <Grid item xs={6}>
                  <Button onClick={ClearLocalStorage}>Reset Settings</Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
