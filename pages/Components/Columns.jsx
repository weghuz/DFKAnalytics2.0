import React, { useState } from "react";
import SelectItem from "./Filters/Select";
export default function Columns() {
  const [columns, setColumns] = useState([]);
  let formattedColumns = require('../../Logic/Columns.js');
  return (
    <div className="container">
      <div className="row">
        <SelectItem
          values={columns}
          title="Columns"
          columns="col-12"
          setValues={setColumns}
        >
          {formattedColumns}
        </SelectItem>
      </div>
    </div>
  );
}
