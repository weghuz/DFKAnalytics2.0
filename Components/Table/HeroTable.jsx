import React, { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columnDefs } from "../../Logic/GridTableColumns";
import {
  ClassScore,
  getRecessives,
  GrowthScore,
  TrainStat,
} from "../../Logic/HeroBase";
export default function Table({ isLoading, update, clickedHero }) {
  const [pageSize, setPageSize] = useState(100);
  const [page, setPage] = useState(0);
  const rowsPerPageOptions = [5, 10, 15, 20, 35, 50, 75, 100];
  const [heroes, setHeroes] = useState([]);
  update((newHeroes, clear) => {
    newHeroes.forEach((h) => {
      getRecessives(h);
      ClassScore(h);
      GrowthScore(h);
      TrainStat(h);
      h.stats = { hp: h.hp };
      h.id = h.numberId;
    });
    setHeroes((heroes) => {
      if (clear) {
        return newHeroes;
      }
      return heroes.concat(newHeroes);
    });
    console.log(newHeroes, heroes);
  });
  return (
    <div style={{ margin: "0 1%", color: "black" }}>
      <DataGrid
        density="compact"
        autoHeight={true}
        rows={heroes}
        loading={isLoading}
        columns={columnDefs}
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
        style={{ color: "white" }}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
  );
}
