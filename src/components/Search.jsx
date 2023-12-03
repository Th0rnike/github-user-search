import React from "react";
import search from "../assets/icon-search.svg";

export default function Search() {
  return (
    <div className="search">
      <img src={search} alt="" />
      <input type="text" placeholder="Search GitHub username…" />
      <button>search</button>
    </div>
  );
}
