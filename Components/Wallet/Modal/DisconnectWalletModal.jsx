import { Button, Container, Dialog, Grid, Input, Modal } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function DisconnectWalletModal({
  address,
  closeModalFunction,
  connectionMethod,
  disconnectWalletCallback,
}) {
  return (
    <Dialog open={true} onClose={closeModalFunction}>
      <Container>
        <Grid container spacing={2}>
          <Grid item>
            <p>
              {`This site stores no data on servers. The wallet connection is
        personal and will only be used to query the DeFikingdoms API.`}
            </p>
            <p>{`You're currently connected through ${connectionMethod}`}.</p>
            <p className="text-center">
              <Button
                variant="contained"
                color="error"
                onClick={disconnectWalletCallback}
              >
                {`Disconnect`}
              </Button>
            </p>
          </Grid>
        </Grid>
      </Container>
    </Dialog>
  );
}
