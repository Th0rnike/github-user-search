import { useEffect, useState } from "react";
import "./App.css";
import { Octokit } from "octokit";
import sun from "./assets/icon-sun.svg";
import moon from "./assets/icon-moon.svg";
import search from "./assets/icon-search.svg";
import location from "./assets/icon-location.svg";
import website from "./assets/icon-website.svg";
import twitter from "./assets/icon-twitter.svg";
import company from "./assets/icon-company.svg";

function App() {
  const TOKEN =
    "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";
  const octokit = new Octokit({
    auth: TOKEN,
  });

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

  useEffect(() => {
    octokit
      .request(`GET /users/{username}`, {
        username: "Th0rnike",
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
      });
  }, []);

  return (
    <div className="App">
      <div className="header">
        <h1>devfinder</h1>
        <div>
          <h4>DARK</h4>
          <img src={moon} alt="" />
        </div>
      </div>

      <div className="search">
        <img src={search} alt="" />
        <input type="text" placeholder="Search GitHub username…" />
        <button>search</button>
      </div>

      <div className="main-div">
        <img src={dataList.avatar_url} alt="" />
        <h1>{dataList.name}</h1>
        <p>{dataList.login}</p>
        <p>{dataList.created_at}</p>
        <p>{dataList.bio}</p>
        <div className="stats">
          <div>
            <p>repos</p>
            <h6>{dataList.public_repos}</h6>
          </div>
          <div>
            <p>followers</p>
            <h6>{dataList.followers}</h6>
          </div>
          <div>
            <p>following</p>
            <h6>{dataList.following}</h6>
          </div>
        </div>
        <div>
          <img src={location} alt="" />
          <h4>{dataList.location}</h4>
        </div>
        <div>
          <img src={website} alt="" />
          <h4>{dataList.website}</h4>
        </div>
        <div>
          <img src={twitter} alt="" />
          <h4>{dataList.twitter}</h4>
        </div>
        <div>
          <img src={company} alt="" />
          <h4>{dataList.company}</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
