import React from "react";
import sun from "./assets/icon-sun.svg";
import moon from "./assets/icon-moon.svg";
import search from "./assets/icon-search.svg";

export default function Header() {
  return (
    <div className="header">
      <h1>devfinder</h1>
      <div>
        <h4>DARK</h4>
        <img src={moon} alt="" />
      </div>
      <div>
        <img src={search} alt="" />
        <input type="text" placeholder="Search GitHub username…" />
        <button>search</button>
      </div>
    </div>
  );
}
