import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import Head from "next/head";

export default function Options() {
  const ClearLocalStorage = () => {
    localStorage.clear();
    alert("Local Storage Cleared.");
  };
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
              <Button onClick={ClearLocalStorage}>Reset Settings</Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
