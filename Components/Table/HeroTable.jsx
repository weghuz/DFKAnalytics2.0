import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columnDefs } from "../../Logic/GridTableColumns";
import {
  ClassScore,
  getRecessives,
  GrowthScore,
  TrainStat,
} from "../../Logic/HeroBase";
import HeroDetails from "../Modal/HeroDetails";
import { Box } from "@mui/material";
export default function Table({ update, specialColumns }) {
  const [pageSize, setPageSize] = useState(100);
  const [page, setPage] = useState(0);
  const rowsPerPageOptions = [5, 10, 15, 20, 35, 50, 75, 100];
  const [heroDetails, setHeroDetails] = useState(null);
  const [heroes, setHeroes] = useState([]);
  const [columns, setColumns] = useState([]);
  update((newHeroes, clear) => {
    newHeroes.forEach((h) => {
      getRecessives(h);
      ClassScore(h);
      GrowthScore(h);
      TrainStat(h);
      h.stats = { hp: h.hp };
      h.id = h.id;
    });
    setHeroes((heroes) => {
      if (clear) {
        return newHeroes;
      }
      return heroes.concat(newHeroes);
    });
    console.log(newHeroes, heroes);
  });
  const clickedHero = (hero) => {
    setHeroDetails((h) => hero);
  };
  return (
    <Box bgcolor={"background.paper"}>
      <DataGrid
        density="compact"
        autoHeight={true}
        rows={heroes}
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
        components={{
          Toolbar: GridToolbar,
        }}
      />
      {heroDetails !== null && (
        <HeroDetails hero={heroDetails} clear={() => setHeroDetails(null)} />
      )}
    </Box>
  );
}
