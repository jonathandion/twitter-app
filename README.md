## Twitter App

[![Build Status](https://travis-ci.org/jonathandion/twitter-app.svg?branch=master)](https://travis-ci.org/jonathandion/twitter-app)

[Heroku Demo](https://as-twitter-app.herokuapp.com/)

## Instructions

Install dependencies:

```npm install```

Create a file called `.env` inside the `server` folder and add your **Twitter credentials**

````
  CONSUMER_KEY=
  CONSUMER_SECRET=
  ACCESS_TOKEN_KEY=
  ACCESS_TOKEN_SECRET=
````

```npm run start```


### Development

#### 1.`npm run server`(port: 3000)
Runs the server in development mode using nodemon.

#### 2. `npm run dev` (port: 3001)
Runs React with WebpackDevServer.

## Production

#### `npm run start`

Starts the app.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

[More info here](https://github.com/facebookincubator/create-react-app)


