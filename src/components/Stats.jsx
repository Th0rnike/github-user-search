import React from "react";

export default function Stats({ public_repos, followers, following }) {
  return (
    <div className="stats">
      <div>
        <p>repos</p>
        <h6>{public_repos}</h6>
      </div>
      <div>
        <p>followers</p>
        <h6>{followers}</h6>
      </div>
      <div>
        <p>following</p>
        <h6>{following}</h6>
      </div>
    </div>
  );
}