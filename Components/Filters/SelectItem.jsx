import React from "react";
import Select from "react-dropdown-select";


export default function SelectItem({ children, title, values, setValues, label, value, columns, color }) {
  return (
    <div className={columns}>
      <label className="font-weight-bold" style={{color:color}}>{title}</label>
      <Select style={{color:color}} keepSelectedInList={false} clearable={true} searchBy={label} labelField={label} valueField={value} values={values} multi options={children} placeholder={title} onChange={(values) => setValues(values)}/>
    </div>
  );
}

SelectItem.defaultProps = {
  columns: "col-sm-6 col-md-4 col-xl-3",
  color: "white",
  value: "value",
  label: "label"
}