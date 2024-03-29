import React from "react";

export default function PetCredits({ children }) {
  return (
    <>
      {children.credits.startsWith("https") ? (
        <a href={children.credits} target={"_blank"} rel={"noreferrer"}>
          {children.credits.substring(20)}
        </a>
      ) : (
        children.credits
      )}
    </>
  );
}
