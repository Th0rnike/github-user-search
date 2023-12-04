import React from "react";

export default function ProfileCard({
  avatar_url,
  name,
  login,
  created_at,
  bio,
}) {
  return (
    <div className="profileCard">
      <img
        style={{
          width: "30px",
          height: "30px",
        }}
        src={avatar_url}
        alt=""
      />
      <h1>{name}</h1>
      <p>{login}</p>
      <p>{created_at}</p>
      <p>{bio}</p>
    </div>
  );
}
