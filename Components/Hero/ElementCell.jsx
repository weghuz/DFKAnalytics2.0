import React from "react";
import Image from "next/image";
import { Tooltip } from "@mui/material";
import Dark from "../../public/Elements/dark.png";
import Earth from "../../public/Elements/earth.png";
import Fire from "../../public/Elements/fire.png";
import Ice from "../../public/Elements/ice.png";
import Light from "../../public/Elements/light.png";
import Lightning from "../../public/Elements/lightning.png";
import Water from "../../public/Elements/water.png";
import Wind from "../../public/Elements/wind.png";

export default function ElementCell({ children, tooltip }) {
  const elementImage = () => {
    switch (children) {
      case "dark":
        return <Image src={Dark} alt="Dark" height={16} width={16} />;
      case "earth":
        return <Image src={Earth} alt="Earth" height={16} width={16} />;
      case "fire":
        return <Image src={Fire} alt="Fire" height={16} width={16} />;
      case "ice":
        return <Image src={Ice} alt="Ice" height={16} width={16} />;
      case "light":
        return <Image src={Light} alt="Light" height={16} width={16} />;
      case "lightning":
        return <Image src={Lightning} alt="Lightning" height={16} width={16} />;
      case "water":
        return <Image src={Water} alt="Water" height={16} width={16} />;
      default:
        return <Image src={Wind} alt="Wind" height={16} width={16} />;
    }
  };
  if(tooltip)
  {
    return (
      <Tooltip
        placement="left"
        title={children}
      >
        <div style={{
            backgroundColor: "rgb(230,230,230)",
            padding:"1px",
            display: "flex",
            justifyItems: "center",
            justifyContent: "center",
          }}>{elementImage()}</div>
      </Tooltip>
    );
  }
  else{
    return (
        <div style={{
            backgroundColor: "rgb(230,230,230)",
            padding:"1px",
            display: "flex",
            justifyItems: "center",
            justifyContent: "center",
          }}>{elementImage()}</div>
    );
  }
}

ElementCell.defaultProps = {
    tooltip:true,
}