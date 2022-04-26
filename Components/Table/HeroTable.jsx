import React, { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columnDefs } from "../../Logic/GridTableColumns";
import { ClassScore, getRecessives, GrowthScore, TrainStat } from "../../Logic/HeroBase";

export default function Table({ isLoading, update }) {
  const [pageSize, setPageSize] = useState(100);
  const [page, setPage] = useState(0);
  const rowsPerPageOptions = [5, 10, 15, 20, 35, 50, 75, 100];
  
  const [heroes, setHeroes] = useState([]);
  update((newHeroes) => {
    newHeroes.forEach((h) => {
      getRecessives(h);
      ClassScore(h);
      GrowthScore(h);
      TrainStat(h);
      h.stats = { hp: h.hp };
      h.id = h.numberId;
    });
    setHeroes(newHeroes);
    console.log(newHeroes);
  });
  return (
    <div style={{ height: "800px", margin: "0 1%", color: "black" }}>
      <DataGrid
        density="compact"
        autoHeight={true}
        rows={heroes}
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
