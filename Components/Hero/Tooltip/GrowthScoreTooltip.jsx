import { Grid } from "@mui/material";
import React from "react";

export default function GrowthScoreTooltip({ children }) {
  return (
    <Grid container xs={12}>
      <Grid item container xs={12}>
        <label>Growth Score</label>
        <p>
          Growth Score represents the Stat Growth of the hero relative to its
          main class ({children.mainClass}).
        </p>
        <span>A way to think about it is:</span>
        <p>
          The value of average stats gained per level, relative to the heroes
          main class ({children.mainClass})
        </p>
      </Grid>
      <Grid item xs={12} sx={{ fontWeight: "bold" }}>
        Breakdown
      </Grid>
      <Grid item xs={6}>
        Str: {children.growthScoreBreakdown.str}
      </Grid>
      <Grid item xs={6}>
        Dex: {children.growthScoreBreakdown.dex}
      </Grid>
      <Grid item xs={6}>
        Agi: {children.growthScoreBreakdown.agi}
      </Grid>
      <Grid item xs={6}>
        Vit: {children.growthScoreBreakdown.vit}
      </Grid>
      <Grid item xs={6}>
        End: {children.growthScoreBreakdown.end}
      </Grid>
      <Grid item xs={6}>
        Int: {children.growthScoreBreakdown.int}
      </Grid>
      <Grid item xs={6}>
        Wis: {children.growthScoreBreakdown.wis}
      </Grid>
      <Grid item xs={6}>
        Lck: {children.growthScoreBreakdown.lck}
      </Grid>
    </Grid>
  );
}
