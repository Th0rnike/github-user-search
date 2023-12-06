import React from "react";
import "./profileCard.css";

export default function ProfileCard({
  avatar_url,
  name,
  login,
  created_at,
  bio,
  isDark,
}) {
  return (
    <>
      <div className={isDark ? "profileCard darkTheme" : "profileCard"}>
        <div>
          <img src={avatar_url} alt="" />
        </div>
        <div className="right">
          <div className="profileInformation">
            <h1>{name}</h1>
            <p id="login">{login}</p>
            <p id="created_at">{created_at}</p>
          </div>
          <div id="bio">
            <p>{bio}</p>
          </div>
        </div>
      </div>
    </>
  );
}
