import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { Grid } from "@mui/material";

export default function Pet03StarSlider({
  bonusName,
  setValue,
  clear,
  disabled,
}) {
  const [profBonus, setProfBonus] = useState([0, 3]);
  const clearState = () => {
    setProfBonus([0, 3]);
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
            return val;
          }}
          valueLabelDisplay="auto"
          value={profBonus}
          min={0}
          max={3}
          size="small"
          marks={[
            {
              value: 0,
              label: "",
            },
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
            return val.toString();
          }}
        />
      </Grid>
    </Grid>
  );
}
