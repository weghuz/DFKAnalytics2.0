import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { Grid } from "@mui/material";

export default function NumberSlider({
  title,
  min,
  max,
  callback,
  marks,
  clear,
}) {
  const [value, setValue] = useState([min, max]);
  const clearState = () => {
    setValue([min, max]);
  };
  clear(clearState);
  return (
    <Grid item xs={12} sm={6} md={4} xl={3}>
      <label className="font-weight-bold text-white">{title}</label>
      <Slider
        valueLabelDisplay="auto"
        value={value}
        min={min}
        max={max}
        marks={marks}
        size="small"
        onChange={(e, val) => {
          setValue(val);
        }}
        onChangeCommitted={(e, val) => {
          callback(val);
        }}
        sx={{ color: "#0074D9" }}
      />
    </Grid>
  );
}
