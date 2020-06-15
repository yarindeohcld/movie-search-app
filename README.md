## movie-search-app
An application for searching movies by title. Retreving values from omdb (imdb based):
http://www.omdbapi.com/?apikey=${API_KEY}

- Pure latest React application with hooks. 
- Build upon a light boilerplate I've created (https://github.com/yarindeoh/create-react-app-light)
- You can search for a movie by it's title, it's updating when you type.
- In order to reduce Api calls - added debounce on every 500 ms for the search value.

## Quick Use

Run local with webpack-dev-server

```
yarn start-dev
```
Run webpack build

```
yarn build
```
Run node webserver

```
yarn start
```

Browse for movie-search-app domain deployed on heroku:
https://movie-search-app-cd.herokuapp.com/

 ### TODOS:
 - Add Loader state with context / state management
 - Currently this app is stateless, in the future, when adding some states,
   consider caching results in pagination. 
 - Add tests!
 - Finish pixel perfect UI
 - Add env variables for hosting API_URL in private and not as constants.
 
 
