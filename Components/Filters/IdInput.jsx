import { Grid, TextField } from "@mui/material"
import React from "react"

export default function IdInput({ callback, value, setValue, label }) {
  return (
    <Grid item xs={12} marginTop={"15px"}>
      <TextField
        variant="outlined"
        label={label}
        multiline
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id="IdInput"
        onBlur={callback}
        rows={4}
        fullWidth={true}
      />
    </Grid>
  )
}
