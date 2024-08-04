require('dotenv').config()

const express = require('express')
// import express from 'express'
const app = express()
const port = 4000

const githubData = {
    "login": "CipherHitro",
    "id": 161009403,
    "node_id": "U_kgDOCZjO-w",
    "avatar_url": "https://avatars.githubusercontent.com/u/161009403?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/CipherHitro",
    "html_url": "https://github.com/CipherHitro",
    "followers_url": "https://api.github.com/users/CipherHitro/followers",
    "following_url": "https://api.github.com/users/CipherHitro/following{/other_user}",
    "gists_url": "https://api.github.com/users/CipherHitro/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/CipherHitro/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/CipherHitro/subscriptions",
    "organizations_url": "https://api.github.com/users/CipherHitro/orgs",
    "repos_url": "https://api.github.com/users/CipherHitro/repos",
    "events_url": "https://api.github.com/users/CipherHitro/events{/privacy}",
    "received_events_url": "https://api.github.com/users/CipherHitro/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Rohit",
    "company": null,
    "blog": "",
    "location": "india",
    "email": null,
    "hireable": null,
    "bio": "I am enthusiastic learner, interested in cybersecurity. ",
    "twitter_username": null,
    "public_repos": 3,
    "public_gists": 0,
    "followers": 2,
    "following": 0,
    "created_at": "2024-02-23T07:55:02Z",
    "updated_at": "2024-08-03T15:04:59Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram',(req,res) =>{
    res.send("@debug.rohit")
})

app.get('/login',(req,res) =>{
    res.send("<h1>Login Page</h1>")
})

app.get('/github',(req,res) =>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})