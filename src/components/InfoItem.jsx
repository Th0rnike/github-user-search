import React from "react";

export default function InfoItem({ icon, info }) {
  return (
    <div className="infoItem">
      <div>
        <img src={icon} alt="" />
        <h4>{info}</h4>
      </div>
    </div>
  );
}
