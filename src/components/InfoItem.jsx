import React from "react";
import "./infoItem.css";

export default function InfoItem({ className, icon, info }) {
  return (
    <div className={`infoItem ${className}`}>
      <img src={icon} alt="" />
      <h4>{info}</h4>
    </div>
  );
}
