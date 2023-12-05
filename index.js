require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

const githubData = {
  login: "ChhitizeKumar",
  id: 78135350,
  node_id: "MDQ6VXNlcjc4MTM1MzUw",
  avatar_url: "https://avatars.githubusercontent.com/u/78135350?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/ChhitizeKumar",
  html_url: "https://github.com/ChhitizeKumar",
  followers_url: "https://api.github.com/users/ChhitizeKumar/followers",
  following_url:
    "https://api.github.com/users/ChhitizeKumar/following{/other_user}",
  gists_url: "https://api.github.com/users/ChhitizeKumar/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/ChhitizeKumar/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/ChhitizeKumar/subscriptions",
  organizations_url: "https://api.github.com/users/ChhitizeKumar/orgs",
  repos_url: "https://api.github.com/users/ChhitizeKumar/repos",
  events_url: "https://api.github.com/users/ChhitizeKumar/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/ChhitizeKumar/received_events",
  type: "User",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 8,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2021-01-28T06:30:36Z",
  updated_at: "2023-11-27T18:24:59Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/username", (req, res) => {
  res.send("Chhitize11");
});

app.get("/login", (req, res) => {
  res.send("Lorem ipsum dolor sit amet.");
});

app.get("/github", (req, res) => {
  res.send(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
