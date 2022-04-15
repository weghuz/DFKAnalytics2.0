import React, { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columnDefs } from "../../Logic/GridTableColumns";

export default function Table({ isLoading, children }) {
  const [pageSize, setPageSize] = useState(15);
  const [page, setPage] = useState(0);
  const rowsPerPageOptions = [5, 10, 15, 20, 35, 50, 75, 100];
  return (
    <div style={{ height: "800px", margin: "0 1%", color: "black" }}>
      <DataGrid
        density="compact"
        autoHeight={true}
        rows={children}
        loading={isLoading}
        columns={columnDefs}
        onSortModelChange={() => setPage(0)}
        page={page}
        onPageChange={(page) => setPage(page)}
        pagination={true}
        pageSize={pageSize}
        onPageSizeChange={(val) => setPageSize(val)}
        rowsPerPageOptions={rowsPerPageOptions}
        style={{ backgroundColor: "rgb(25,25,25)", color: "white" }}
        components={{
          Toolbar: GridToolbar
        }}
      />
    </div>
  );
}
