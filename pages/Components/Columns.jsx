
import React from 'react'
import SelectItem from "./Filters/Select";

export default function Columns() {
    const placeholder = (val) => {
        console.log(val);
    }
  return (
    <div className="container">
      <div className="row">
        <SelectItem title="Class" columns="col-12" setValues={placeholder}>
          {[]}
        </SelectItem>
      </div>
    </div>
  )
}
