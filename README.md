# react-query-material-imdb

# 🚀 Javascript full-stack 🚀

### React / omdbapi.com API

OMDb API

The Open Movie Database

The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users.

https://github.com/coding-to-music/react-query-material-imdb

https://react-query-material-imdb.vercel.com

by Rishikesh Vedpathak https://github.com/RishikeshVedpathak

https://react-query-movies-app.netlify.app

https://github.com/RishikeshVedpathak/react-query-movies-app

## Runtime errors on Heroku (works fine on Vercel)

https://react-query-material-imdb.herokuapp.com (Exceeds memory now stopped working)

```java
2022-04-27T06:26:41.000000+00:00 app[api]: Build succeeded
2022-04-27T06:27:14.273666+00:00 heroku[web.1]: Process running mem=524M(102.5%)
2022-04-27T06:27:14.274910+00:00 heroku[web.1]: Error R14 (Memory quota exceeded)
2022-04-27T06:27:24.654372+00:00 app[web.1]: Compiled successfully!
2022-04-27T06:27:24.654881+00:00 app[web.1]:
2022-04-27T06:27:24.654955+00:00 app[web.1]: You can now view react-query-material-imdb in the browser.
2022-04-27T06:27:24.655122+00:00 app[web.1]:
2022-04-27T06:27:24.655152+00:00 app[web.1]: Note that the development build is not optimized.
2022-04-27T06:27:24.655208+00:00 app[web.1]: To create a production build, use npm run build.
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
