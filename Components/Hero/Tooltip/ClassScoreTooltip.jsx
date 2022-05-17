import { Grid } from "@mui/material";
import React from "react";

export default function GrowthScoreTooltip({ children }) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <label>Class Score</label>
        <p>
          Class Score represents a measurement of the Stats the hero has
          relative to its main class ({children.mainClass}).
        </p>
        <span>A way to think about it is:</span>
        <p>
          How valuable the stats this hero has are, relative to its main class (
          {children.mainClass}).
        </p>
      </Grid>
      <Grid item xs={12} sx={{ fontWeight: "bold" }}>
        Breakdown
      </Grid>
      <Grid item xs={6}>
        Str: {children.classScoreBreakdown.str}
      </Grid>
      <Grid item xs={6}>
        Dex: {children.classScoreBreakdown.dex}
      </Grid>
      <Grid item xs={6}>
        Agi: {children.classScoreBreakdown.agi}
      </Grid>
      <Grid item xs={6}>
        Vit: {children.classScoreBreakdown.vit}
      </Grid>
      <Grid item xs={6}>
        End: {children.classScoreBreakdown.end}
      </Grid>
      <Grid item xs={6}>
        Int: {children.classScoreBreakdown.int}
      </Grid>
      <Grid item xs={6}>
        Wis: {children.classScoreBreakdown.wis}
      </Grid>
      <Grid item xs={6}>
        Lck: {children.classScoreBreakdown.lck}
      </Grid>
      <p>
        Tip!: If you want to read more about how Class Score works. Read my
        article on{" "}
        <a
          rel="noreferrer"
          href="https://medium.com/@Weghuz/advanced-theory-part-1-scoring-heroes-in-defi-kingdoms-1ffd043fcd1c"
          target="_blank"
        >
          medium HERE!
        </a>
      </p>
    </Grid>
  );
}
