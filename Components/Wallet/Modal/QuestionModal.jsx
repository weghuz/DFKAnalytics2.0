import { Button, Container, Dialog, Grid, Input } from "@mui/material";
import React, { useState } from "react";

export default function QuestionModal({
  HideQuestionsModal,
  SaveLocalStorageWallet,
}) {
  const [address, setAddress] = useState("");
  return (
    <Dialog Title="Why connect?" open={true} onClose={HideQuestionsModal}>
      <Container>
        <Grid container spacing={2}>
          <Grid item>
            <p>
              The reason DFKAnalytics has a connect with MetaMask feature is to
              make it easier for you to provide your active MetaMask wallets
              addresses.
            </p>
            <p>
              If you prefer to provide your 0x for the Wallet page through an
              input window instead you can do it here.
            </p>
            <Grid container spacing={2} marginBottom={2}>
              <Grid item sx={{ width: "100%" }}>
                <Input
                  sx={{ width: "100%" }}
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  placeholder="0x address"
                  onInput={(e) => setAddress(e.target.value)}
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => SaveLocalStorageWallet(address)}
                >
                  Save address
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Dialog>
  );
}
