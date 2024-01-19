import React, { useState } from "react";
import search from "../assets/icon-search.svg";
import "./search.css";
import { Octokit } from "octokit";

export default function Search({ isDark, updateInfo }) {
  const TOKEN = process.env.REACT_APP_TOKEN;
  const octokit = new Octokit({
    auth: TOKEN,
  });

  const [inputValue, setInputValue] = useState("");

  const [dataList, setDataList] = useState({
    avatar_url: "",
    name: "",
    login: "",
    created_at: "",
    bio: "",
    public_repos: 0,
    followers: 0,
    following: 0,
    location: "",
    blog: "",
    twitter_username: "",
    company: "",
  });

  function handleChange(e) {
    let val = e.target.value;
    setInputValue(val);
  }

  function handleClickUpdate() {
    octokit
      .request(`GET /users/{username}`, {
        username: inputValue,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("error occured in request");
        }
        return res.data;
      })
      .then((data) => {
        setDataList({
          avatar_url: data.avatar_url,
          name: data.name,
          login: data.login,
          created_at: data.created_at,
          bio: data.bio,
          public_repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          location: data.location,
          blog: data.blog,
          twitter_username: data.twitter_username,
          company: data.company,
        });
        updateInfo(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setDataList("error");
      });
  }

  return (
    <div className={isDark ? "search darkTheme" : "search"} isDark={isDark}>
      <img src={search} alt="" />
      <input
        onChange={handleChange}
        value={inputValue}
        className={isDark ? "darkTheme" : ""}
        type="text"
        placeholder="Search GitHub username…"
      />
      {dataList === "error" ? <h1 className="error">No results</h1> : ""}
      <button onClick={handleClickUpdate}>Search</button>
    </div>
  );
}
