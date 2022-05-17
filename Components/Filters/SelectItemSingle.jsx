import { Grid } from "@mui/material";
import React from "react";
import Select from "react-dropdown-select";

export default function SelectItemSingle({
  children,
  title,
  values,
  setValues,
  label,
  value,
  columns,
  callback,
  clearable
}) {
  return (
    <Grid item xs={12} sm={6} md={4} xl={3} className={columns}>
      <label className="font-weight-bold">{title}</label>
      <Select
        onBlur={callback}
        clearable={clearable}
        searchBy={label}
        labelField={label}
        valueField={value}
        values={values}
        options={children}
        placeholder={title}
        onChange={(values) => setValues(values)}
      />
    </Grid>
  );
}

SelectItemSingle.defaultProps = {
  columns: "col-sm-6 col-md-4 col-xl-3",
};
