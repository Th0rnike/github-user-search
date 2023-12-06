import React from "react";
import search from "../assets/icon-search.svg";
import "./search.css";

export default function Search({ isDark }) {
  return (
    <div className={isDark ? "search darkTheme" : "search"} isDark={isDark}>
      <img src={search} alt="" />
      <input
        className={isDark ? "darkTheme" : ""}
        type="text"
        placeholder="Search GitHub username…"
      />
      <button>Search</button>
    </div>
  );
}
