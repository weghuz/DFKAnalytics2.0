import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Grid } from "@mui/material";
import { DataGridPro } from "@mui/x-data-grid-pro";
export default function DFKATable({
  rows,
  columns,
  visibilityChanged,
  columnVisibilityModel,
  onRowClick,
}) {
  const [pageSize, setPageSize] = useState(100);
  const [page, setPage] = useState(0);
  const rowsPerPageOptions = [
    5, 10, 15, 20, 35, 50, 75, 100, 250, 500, 1000, 9999,
  ];
  const GetVisibility = () => {
    return columnVisibilityModel;
  };
  return (
    <Grid container justifyContent={"center"}>
      <Grid item width={"100vw"} height={"100vh"} maxWidth={1920}>
        <DataGridPro
          density="compact"
          rows={rows}
          columns={columns}
          columnBuffer={100}
          rowBuffer={100}
          rowThreshold={100}
          columnThreshold={100}
          columnVisibilityModel={GetVisibility()}
          onColumnVisibilityModelChange={(visibilityModel) => {
            console.log(visibilityModel);
            visibilityChanged(visibilityModel);
          }}
          onSortModelChange={() => setPage(0)}
          onRowClick={({ row }) => {
            if (onRowClick) {
              onRowClick(row);
            }
          }}
          getRowClassName={({ row }) => {
            switch (row.rarity) {
              case 0:
                return "common";
              case 1:
                return "uncommon";
              case 2:
                return "rare";
              case 3:
                return "legendary";
              case 4:
                return "mythic";
              default:
                return;
            }
          }}
          page={page}
          onPageChange={(page) => setPage(page)}
          pagination={true}
          pageSize={pageSize}
          onPageSizeChange={(val) => setPageSize(val)}
          rowsPerPageOptions={rowsPerPageOptions}
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </Grid>
    </Grid>
  );
}
