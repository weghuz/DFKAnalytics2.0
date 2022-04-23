import { TextField } from "@mui/material";
import React from "react";

export default function IdInput({ callback }) {
  return (
    <div className="col-12">
      <TextField
        variant="outlined"
        label="Id and 0x Address Input"
        multiline
        id="IdInput"
        onBlur={callback}
        rows={4}
        fullWidth={true}
      />
    </div>
  );
}
