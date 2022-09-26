import React from "react";

export default function HeroBackAppendageCell({ hero }) {
  return (
    <>
      {
        {
          0: "Basic1",
          1: "Basic2",
          2: "Basic3",
          3: "Basic4",
          4: "Basic5",
          5: "Basic6",
          6: "Basic7",
          7: "Basic8",
          8: "Basic9",
          9: "Basic10",
          16: "Advanced1",
          17: "Advanced2",
          18: "Advanced3",
          19: "Advanced4",
          20: "Advanced5",
          24: "Elite1",
          25: "Elite2",
          28: "Transcendent1",
        }[hero.backAppendage]
      }
    </>
  );
}
