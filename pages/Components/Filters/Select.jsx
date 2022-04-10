import React, {Component} from "react";
import Select from "react-dropdown-select";


export default function SelectItem({ children, title, values, setValues, label, value, columns }) {
  return (
    <div className={columns}>
      <Select clearable={true} searchBy={label} labelField={label} valueField={value} values={values} multi options={children} placeholder={title} onChange={(values) => setValues(values)}/>
    </div>
  );
}

SelectItem.defaultProps = {
  columns: "col-4 col-md-3",
}