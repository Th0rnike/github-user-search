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

export default function Info() {
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
        username: "fabpot",
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
    <div className="info">
      <ProfileCard
        avatar_url={dataList.avatar_url}
        name={dataList.name}
        login={dataList.login}
        created_at={dataList.created_at}
        bio={dataList.bio}
      />
      <Stats
        public_repos={dataList.public_repos}
        followers={dataList.followers}
        following={dataList.following}
      />
      <InfoItem
        icon={location}
        info={dataList.location ? dataList.location : "Not Available"}
      />
      <InfoItem
        icon={website}
        info={dataList.website ? dataList.website : "Not Available"}
      />
      <InfoItem
        icon={twitter}
        info={
          dataList.twitter_username
            ? dataList.twitter_username
            : "Not Available"
        }
      />
      <InfoItem
        icon={company}
        info={dataList.company ? dataList.company : "Not Available"}
      />
    </div>
  );
}
