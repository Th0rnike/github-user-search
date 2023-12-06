import React from "react";
import "./infoItem.css";

export default function InfoItem({ className, icon, info, isDark }) {
  return (
    <div
      className={
        !isDark ? `infoItem ${className}` : `infoItem ${className} darkTheme`
      }
    >
      {info === "Not Available" ? (
        <>
          <img className="faint" src={icon} alt="" />
          <h4 className="faint">{info}</h4>
        </>
      ) : (
        <>
          <img src={icon} alt="" />
          <h4>{info}</h4>
        </>
      )}
    </div>
  );
}
