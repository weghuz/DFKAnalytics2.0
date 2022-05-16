import { Grid } from "@mui/material";
import React from "react";
import Select from "react-dropdown-select";

export default function SelectItem({
  children,
  title,
  values,
  setValues,
  label,
  value,
  columns,
  color,
}) {
  return (
    <Grid item xs={12} sm={6} md={4} xl={3} className={columns}>
      <label className="font-weight-bold">
        {title}
      </label>
      <Select
        clearable={true}
        searchBy={label}
        labelField={label}
        valueField={value}
        values={values}
        clearOnSelect={true}
        clearOnBlur={true}
        multi
        options={children}
        placeholder={title}
        onChange={(values) => setValues(values)}
      />
    </Grid>
  );
}

SelectItem.defaultProps = {
  columns: "col-sm-6 col-md-4 col-xl-3",
  value: "value",
  label: "label",
  visible: true,
};
