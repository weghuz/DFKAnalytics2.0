import Image from "next/image";
import React from "react";
import sdid from "../../public/SDID.png";

export default function HeroId({ children }) {
  return (
    <>
    {
        parseInt(children) > 100000000000 ?
        <div className="d-inline-block"><img style={{width:"10px",height:"10px"}} src="./CVID.png" /> {parseInt(children)-1000000000000}</div> :
        <div className="d-inline-block"><img style={{width:"10px",height:"10px"}} src="./SDID.png" /> {children}</div>
    }
    </>
  );
}
