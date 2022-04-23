import React from "react";
import Select from "react-dropdown-select";


export default function SelectItemSingle({ children, title, values, setValues, label, value, columns, color, callback }) {
  return (
    <div className={columns}>
      <label className="font-weight-bold" style={{color:color}}>{title}</label>
      <Select style={{color:color}} onBlur={callback} keepSelectedInList={false} clearable={true} searchBy={label} labelField={label} valueField={value} values={values} options={children} placeholder={title} onChange={(values) => setValues(values)}/>
    </div>
  );
}

SelectItemSingle.defaultProps = {
  columns: "col-sm-6 col-md-4 col-xl-3",
  color: "white"
}