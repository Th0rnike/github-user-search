import React from "react";
import location from "../assets/icon-location.svg";
import website from "../assets/icon-website.svg";
import twitter from "../assets/icon-twitter.svg";
import company from "../assets/icon-company.svg";
import { Octokit } from "octokit";
import { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import Stats from "./Stats";
import InfoItem from "./InfoItem";
import "./info.css";

export default function Info({ isDark }) {
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
        username: "octocat",
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

  let day = "";
  let month = "";
  let year = "";

  if (dataList.created_at) {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    day = dataList.created_at.split("-")[2].substring(0, 2);
    month = monthNames[parseInt(dataList.created_at.split("-")[1][1]) - 1];
    year = dataList.created_at.split("-")[0];
  }

  return (
    <div className={isDark ? "darkTheme" : ""}>
      <ProfileCard
        isDark={isDark}
        avatar_url={dataList.avatar_url}
        name={dataList.name}
        login={"@" + dataList.login}
        created_at={"Joined " + day + " " + month + " " + year}
        bio={dataList.bio}
      />
      <Stats
        isDark={isDark}
        public_repos={dataList.public_repos}
        followers={dataList.followers}
        following={dataList.following}
      />
      <InfoItem
        isDark={isDark}
        icon={location}
        info={dataList.location ? dataList.location : "Not Available"}
        className={"custom"}
      />
      <InfoItem
        isDark={isDark}
        icon={website}
        info={dataList.website ? dataList.website : "Not Available"}
      />
      <InfoItem
        isDark={isDark}
        icon={twitter}
        info={
          dataList.twitter_username
            ? dataList.twitter_username
            : "Not Available"
        }
      />
      <InfoItem
        isDark={isDark}
        icon={company}
        info={dataList.company ? dataList.company : "Not Available"}
      />
    </div>
  );
}
