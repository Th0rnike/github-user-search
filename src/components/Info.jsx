import React from "react";
import location from "../assets/icon-location.svg";
import locationWhite from "../assets/icon-location-white.svg";
import website from "../assets/icon-website.svg";
import websiteWhite from "../assets/icon-website-white.svg";
import twitter from "../assets/icon-twitter.svg";
import twitterWhite from "../assets/icon-twitter-white.svg";
import company from "../assets/icon-company.svg";
import companyWhite from "../assets/icon-company-white.svg";
import ProfileCard from "./ProfileCard";
import Stats from "./Stats";
import InfoItem from "./InfoItem";
import "./info.css";

export default function Info({ isDark, sharedInfo }) {
  let day = "";
  let month = "";
  let year = "";
  if (sharedInfo.created_at) {
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
    day = sharedInfo.created_at.split("-")[2].substring(0, 2);
    month = monthNames[parseInt(sharedInfo.created_at.split("-")[1][1]) - 1];
    if (parseInt(sharedInfo.created_at.split("-")[1]) >= 10) {
      month = monthNames[parseInt(sharedInfo.created_at.split("-")[1]) - 1];
    }
    year = sharedInfo.created_at.split("-")[0];
  }

  return (
    <div className={isDark ? "info darkTheme" : "info"}>
      <ProfileCard
        isDark={isDark}
        avatar_url={sharedInfo.avatar_url}
        name={sharedInfo.name}
        login={"@" + sharedInfo.login}
        created_at={"Joined " + day + " " + month + " " + year}
        bio={sharedInfo.bio}
      />
      <Stats
        isDark={isDark}
        public_repos={sharedInfo.public_repos}
        followers={sharedInfo.followers}
        following={sharedInfo.following}
      />
      <InfoItem
        icon={isDark ? locationWhite : location}
        info={sharedInfo.location ? sharedInfo.location : "Not Available"}
        className={"custom"}
      />
      <InfoItem
        icon={isDark ? websiteWhite : website}
        info={sharedInfo.website ? sharedInfo.website : "Not Available"}
      />
      <InfoItem
        icon={isDark ? twitterWhite : twitter}
        info={
          sharedInfo.twitter_username
            ? sharedInfo.twitter_username
            : "Not Available"
        }
      />
      <InfoItem
        icon={isDark ? companyWhite : company}
        info={sharedInfo.company ? sharedInfo.company : "Not Available"}
      />
    </div>
  );
}
