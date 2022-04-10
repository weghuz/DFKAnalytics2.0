import React from "react";
import Style from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={Style.Footer}>
      <p>
        Twitter:{" "}
        <a href="https://twitter.com/Weghuz" target="_blank" rel="noreferrer">
          @Weghuz
        </a>
      </p>
      <p>
        For any feedback about the site feel free to dm me on Discord at
        weghuz#1978
      </p>
    </div>
  );
}
