import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import HeroDetails from "../Modal/HeroDetails";
import { Grid } from "@mui/material";
export default function Table({
  heroes,
  columns,
  visibilityChanged,
  columnVisibilityModel,
}) {
  const [pageSize, setPageSize] = useState(100);
  const [page, setPage] = useState(0);
  const rowsPerPageOptions = [5, 10, 15, 20, 35, 50, 75, 100];
  const [heroDetails, setHeroDetails] = useState(null);
  const clickedHero = (hero) => {
    setHeroDetails((h) => hero);
  };
  const GetVisibility = () => {
    console.log(columnVisibilityModel)
    return columnVisibilityModel;
  }
  return (
    <Grid
      container
      bgcolor={"background.paper"}
      width={"100%"}
      justifyContent={"center"}
    >
      <Grid item width={"100%"} maxWidth={1920}>
        <DataGrid
          bgcolor={"background.paper"}
          density="compact"
          rows={heroes}
          columns={columns}
          autoHeight={true}
          columnVisibilityModel={GetVisibility()}
          onColumnVisibilityModelChange={(visibilityModel) => {
            visibilityChanged(visibilityModel);
          }}
          onSortModelChange={() => setPage(0)}
          onRowClick={({ row }) => {
            clickedHero(row);
          }}
          getRowClassName={({ row }) => {
            switch (row.rarity) {
              case 1:
                return "uncommon";
              case 2:
                return "rare";
              case 3:
                return "legendary";
              case 4:
                return "mythic";
              default:
                return "common";
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
        {heroDetails !== null && (
          <HeroDetails hero={heroDetails} clear={() => setHeroDetails(null)} />
        )}
      </Grid>
    </Grid>
  );
}
