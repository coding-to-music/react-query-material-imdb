# react-query-material-imdb

# 🚀 Javascript full-stack 🚀

### React / Next / MongoDB / eCharts / Storybook / GitHub API

https://github.com/coding-to-music/react-query-material-imdb

https://react-query-material-imdb.vercel.com (works)

by Rishikesh Vedpathak https://github.com/RishikeshVedpathak

https://react-query-movies-app.netlify.app

https://github.com/RishikeshVedpathak/react-query-movies-app

## Build errors on Heroku (works fine on Vercel)

https://react-query-material-imdb.herokuapp.com (does not work)

```java
Failed to compile
/app/src/components/AppHeader/index.tsx
TypeScript error in /app/src/components/AppHeader/index.tsx(3,41):
Could not find a declaration file for module 'react-router-dom'. '/app/node_modules/react-router-dom/index.js' implicitly has an 'any' type.
  Try `npm i --save-dev @types/react-router-dom` if it exists or add a new declaration (.d.ts) file containing `declare module 'react-router-dom';`  TS7016

    1 | import styles from "./index.module.css";
    2 | import { ReactComponent as IMDBLogo } from "assets/images/IMDB_Logo.svg";
  > 3 | import { useHistory, useLocation } from "react-router-dom";
      |                                         ^
    4 | import IconButton from "@material-ui/core/IconButton";
    5 | import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
```

```java
2022-04-27T06:18:05.879018+00:00 heroku[web.1]: Process running mem=529M(103.5%)
2022-04-27T06:18:05.881945+00:00 heroku[web.1]: Error R14 (Memory quota exceeded)
2022-04-27T06:18:27.182679+00:00 heroku[web.1]: Process running mem=514M(100.4%)
2022-04-27T06:18:27.184256+00:00 heroku[web.1]: Error R14 (Memory quota exceeded)
2022-04-27T06:18:47.830722+00:00 heroku[web.1]: Process running mem=514M(100.4%)
2022-04-27T06:18:47.842276+00:00 heroku[web.1]: Error R14 (Memory quota exceeded)
```

## Environment Values

```java

Need to change this to use process.env

const CONSTANTS = {
  BASE_URL: "https://www.omdbapi.com/",
  API_USER_ID: process.env.API_USER_ID,
  API_KEY: process.env.API_KEY,
```

# React-Query-Movies-App

A simple ReactJS movies app based on OMDb API to demonstrate react-query use cases as a state management library

![Movie List App using React Query](https://user-images.githubusercontent.com/1983286/118408706-5280da00-b6a4-11eb-887f-39457e754290.png)

💻 Tech used:

- React
- React Query for server-side state management
- OMDb API to fetch movie data

🌎 Live demo: https://react-query-movies-app.netlify.app/

📌 Blog: https://rishi-vedpathak.medium.com/movies-app-using-react-query-for-server-side-state-management-184140142daf

🎥 Youtube preview: https://www.youtube.com/watch?v=Q92YalYbfkM

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/react-query-material-imdb.git
git push -u origin main
```

## Heroku

```java
heroku create react-query-material-imdb

```

## Heroku MongoDB Environment Variables

```java
heroku config:set

heroku config:set JWT_SECRET="secret"

heroku config:set PUBLIC_URL="https://react-query-material-imdb.herokuapp.com"
```

## Push to Heroku

```java
git push heroku

# or

npm run deploy
```
