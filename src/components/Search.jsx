import React from "react";
import search from "../assets/icon-search.svg";
import "./search.css";

export default function Search() {
  return (
    <div className="search">
      <img src={search} alt="" />
      <input type="text" placeholder="Search GitHub username…" />
      <button>Search</button>
    </div>
  );
}
