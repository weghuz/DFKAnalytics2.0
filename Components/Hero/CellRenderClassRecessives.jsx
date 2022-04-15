import React from "react";

export default function CellRenderClassRecessives({ hero }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {`D: ${hero.mainClass}`}
      <br />
      {`R1: ${hero.R1.mainClass}`}
      <br />
      {`R2: ${hero.R2.mainClass}`}
      <br />
      {`R3: ${hero.R3.mainClass}`}
    </div>
  );
}
