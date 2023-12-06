import React from "react";
import "./stats.css";

export default function Stats({ public_repos, followers, following, isDark }) {
  return (
    <div className={isDark ? "stats darkStats" : "stats"}>
      <div className="details">
        <p>repos</p>
        <h6>{public_repos}</h6>
      </div>
      <div className="details">
        <p>followers</p>
        <h6>{followers}</h6>
      </div>
      <div className="details">
        <p>following</p>
        <h6>{following}</h6>
      </div>
    </div>
  );
}
