import React from "react";
import Image from "next/image";
import StamPot from "../../public/StaminaPotion.png";
import { Container, Dialog, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function TipModal({ closeModalFunction }) {
  return (
    <Dialog Title="Tip Modal" onClose={closeModalFunction} open={true}>
      <Container>
        <Box margin={2}>
          <h5>
            {`Tip to top up the developers stamina `}
            <Image
              src={StamPot}
              alt="Stamina Potion Tip Modal"
              height="60px"
              width="60px"
            />
          </h5>
          <Typography variant="span" color={"primary.main"}>
            {`0xCF3984f4CAa584BEA203Ba2D2A80E05aD8D8C0C9`}
          </Typography>
          <h5 className="my-3">
            {`With the stamina the develper can quest for more features.`}
          </h5>

          <h6>{`Tip top tippers:`}</h6>
          <ul>
            <li>{`Thorik Ẅood: 28.2J`}</li>
            <li>{`Afromaster🍍Burnmaster🍕Gamemaster: 6.969J`}</li>
            <li>{`burnem: 4.20J`}</li>
            <li>{`256BIT+Aromi: 1J`}</li>
          </ul>
        </Box>
      </Container>
    </Dialog>
  );
}
