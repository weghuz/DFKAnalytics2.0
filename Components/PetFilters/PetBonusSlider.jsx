import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { Grid } from "@mui/material";

export default function PetBonusSlider({
  bonusName,
  setValue,
  clear,
  disabled,
}) {
  const [profBonus, setProfBonus] = useState([1, 3]);
  const clearState = () => {
    setProfBonus([1, 3]);
  };
  clear(clearState);
  return (
    <Grid item container xs={12} sm={6} md={4} xl={3}>
      <Grid item className="font-weight-bold" textAlign={"center"} xs={12}>
        {bonusName} Bonus
      </Grid>
      <Grid item marginX={5} xs={12}>
        <Slider
          disabled={disabled}
          getAriaLabel={(val) => {
            switch (val) {
              case 2:
                return "2";
              case 3:
                return "3";
              default:
                return `1`;
            }
          }}
          valueLabelDisplay="auto"
          value={profBonus}
          min={1}
          max={3}
          size="small"
          marks={[
            {
              value: 1,
              label: "⭐",
            },
            {
              value: 2,
              label: "⭐⭐",
            },
            {
              value: 3,
              label: "⭐⭐⭐",
            },
          ]}
          onChange={(e, val) => {
            setProfBonus(val);
          }}
          onChangeCommitted={(e, val) => {
            setValue(val);
          }}
          sx={{ color: "#0074D9" }}
          valueLabelFormat={(val) => {
            switch (val) {
              case 2:
                return "2";
              case 3:
                return "3";
              default:
                return `1`;
            }
          }}
        />
      </Grid>
    </Grid>
  );
}
