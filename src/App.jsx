import { useState } from "react";
import "./App.css";
import { Octokit } from "octokit";

function App() {
  const TOKEN =
    "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";
  const octokit = new Octokit({
    auth: TOKEN,
  });

  const [dataList, setDataList] = useState([]);

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
      let avatar_url = data.avatar_url;
      let name = data.name;
      let login = data.login;
      let created_at = data.created_at;
      let bio = data.bio;
      let public_repos = data.public_repos;
      let followers = data.followers;
      let following = data.following;
      let location = data.location;
      let blog = data.blog;
      let twitter_username = data.twitter_username;
      let company = data.company;
      let dataList = [
        avatar_url,
        name,
        login,
        created_at,
        bio,
        public_repos,
        followers,
        following,
        location,
        blog,
        twitter_username,
        company,
      ];
      setDataList(dataList);
    });

  return (
    <div className="App">
      {dataList.map((i) => (
        <h1 key={crypto.randomUUID()}>{i}</h1>
      ))}
    </div>
  );
}

export default App;
