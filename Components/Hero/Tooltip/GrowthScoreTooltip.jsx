import React from "react";

export default function GrowthScoreTooltip({ children }) {
  return (
    <div className="row">
      <div className="col-12">
        <label>Growth Score</label>
        <p>
          Growth Score represents a measurement of the Stat Growth the hero
          has relative to it's main class.
        </p>
        <span>A way to think about it is:</span>
        <p>
          How valuable the stats this hero will gain per level relative to its
          main class.
        </p>
      </div>
      <div className="col-12 foont-weight-bold">Breakdown</div>
      <div className="col-6">Str: {children.growthScoreBreakdown.str}</div>
      <div className="col-6">Dex: {children.growthScoreBreakdown.dex}</div>
      <div className="col-6">Agi: {children.growthScoreBreakdown.agi}</div>
      <div className="col-6">Vit: {children.growthScoreBreakdown.vit}</div>
      <div className="col-6">End: {children.growthScoreBreakdown.end}</div>
      <div className="col-6">Int: {children.growthScoreBreakdown.int}</div>
      <div className="col-6">Wis: {children.growthScoreBreakdown.wis}</div>
      <div className="col-6">Lck: {children.growthScoreBreakdown.lck}</div>
    </div>
  );
}
