//npm install request --save
//install JSONview extenstion for your browser

var express = require("express");
var router = express.Router();
const request = require("request");
const { response } = require("../app");
///add the API key
const apiKey = "c03a9240d01a256171535d99b1ab0324";
const apiBaseUrl = "http://api.themoviedb.org/3";
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;
const imageBaseUrl = "http://image.tmdb.org/t/p/w300";
router.use((req, res, next) => {
  res.locals.imageBaseUrl = imageBaseUrl;
  next();
});

/* GET home page. */
router.get("/", function (req, res, next) {
  request.get(nowPlayingUrl, (error, response, movieData) => {
    // request.get takes 2 arguments
    // 1.the url to http "get"
    // 2. the callback to run when done apibaseurl which take 3 arg
    //1.error()
    //2.http response
    //3.json/data the server sent back

    console.log(
      "=================================================the error=========================================="
    );
    // console.log(error);
    console.log(
      "=================================================the response========================================"
    );
    //console.log(response);

    const parsedData = JSON.parse(movieData);
    //console.log(parsedData);
    //res.json(parsedData); this will show you the data on the browser
    res.render("index", {
      parsedData: parsedData.results,
    });
  });
});
router.get("/movie/:id", (req, res, next) => {
  // res.json(req.params.id);
  const movieId = req.params.id;
  const thisMovieUrl = `${apiBaseUrl}/movie/${movieId}?api_key=${apiKey}`;
  // res.send(thisMovieUrl);
  request.get(thisMovieUrl, (erro, response, movieData) => {
    const parseData = JSON.parse(movieData);
    res.render("single-movie", {
      parsedData: parseData,
    });
  });
});

module.exports = router;
