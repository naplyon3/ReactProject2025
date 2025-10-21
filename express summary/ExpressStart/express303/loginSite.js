const path = require("path");
const express = require("express");
const app = express();
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
app.use(helmet());
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// param takes 2 args:
// 1.param to look for in the route
// 2.the callback to run( with the usuals)
app.param("id", (req, res, next, id) => {
  console.log("params called:", id);
  //if id has somthing to do with story.....do
  //if id has something to do with blogs ....do
  next();
});

app.use((req, res, next) => {
  if (req.query.msg === "fail") {
    res.locals.msg = "Sorry ,This username or password does not exist";
  } else {
    res.locals.msg = ``;
  }
  next();
});

app.get("/login", (req, res, next) => {
  // console.log(req.query);
  res.render("login");
  //next();
});

app.get("/story/:storyId", (req, res, next) => {
  res.send(`<h1>Story${req.params.storyId}</h1>`);
  next();
});
app.post("/process_login", (req, res) => {
  // req.body is made by urlencoded ,which parses the http message for sent data!res.json(req.body);
  const password = req.body.password;
  const username = req.body.username;
  //check the db to see if the credetials are valid
  //if they are valid...
  //--save teh username in cookie
  //-send them to the welcome page
  if (password === "x") {
    // res.cookie tacke 2 args
    // 1.name of the cookie
    // 2.value to set it to
    res.cookie("username", username);
    res.redirect("/welcome");
  } else {
    res.redirect("/login?msg=fail");
  }
  //res.json(req.body);
});
app.get("/statements", (req, res, next) => {
  //res.sendFile will render the file in the browser but we want to download the file not showing it on the browser
  //res.sendFile(path.join(__dirname, "bank.png"));
  //res.send("Sanity Check");
  ///-----------------------------------------------------------------------------------------------------
  // app has a download method Takes to args:
  // 1.filename
  // 2.optinally,what you wnat the filename to download as
  res.download(path.join(__dirname, "userStatements/bank.png"), "test.png");
});
app.get("/logout", (req, res, next) => {
  res.clearCookie("username");
  res.redirect("/login");
  next();
});
app.get("/welcome", (req, res, next) => {
  // req.cookie object will have a property for every name
  // cookie that has been set therefor we can use it to retrive the user name
  res.render("welcome", {
    username: req.cookies.username,
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
