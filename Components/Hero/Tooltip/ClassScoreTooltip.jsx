import React from "react";

export default function GrowthScoreTooltip({ children }) {
  return (
    <div className="row">
      <div className="col-12">
        <label>Class Score</label>
        <p>
          Class Score represents a measurement of the Stats the hero
          has relative to its main class ({children.mainClass}).
        </p>
        <span>A way to think about it is:</span>
        <p>
          How valuable the stats this hero has are, relative to its
          main class ({children.mainClass}).
        </p>
      </div>
      <div className="col-12 foont-weight-bold">Breakdown</div>
      <div className="col-6">Str: {children.classScoreBreakdown.str}</div>
      <div className="col-6">Dex: {children.classScoreBreakdown.dex}</div>
      <div className="col-6">Agi: {children.classScoreBreakdown.agi}</div>
      <div className="col-6">Vit: {children.classScoreBreakdown.vit}</div>
      <div className="col-6">End: {children.classScoreBreakdown.end}</div>
      <div className="col-6">Int: {children.classScoreBreakdown.int}</div>
      <div className="col-6">Wis: {children.classScoreBreakdown.wis}</div>
      <div className="col-6">Lck: {children.classScoreBreakdown.lck}</div>
      <p>
          Tip!: If you want to read more about how Class Score works. Read my article on <a rel="noreferrer" href="https://medium.com/@Weghuz/advanced-theory-part-1-scoring-heroes-in-defi-kingdoms-1ffd043fcd1c" target="_blank">medium HERE!</a>
      </p>
    </div>
  );
}
