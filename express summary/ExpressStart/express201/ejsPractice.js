// 4.we pass that res.render 2 things:
// -1.the file we want to render
// -2.data we want to pass to that file
// 5.Express uses the node module for our specified view engin and parses the file.5.Express uses the node module for our specified view engin and parses the(this mean ,it takes the HTML/JS/CSS and combines it with whatever "node" there is in )
// 6.the final result of this process is compiled product of the things the browser understands
//app.set() takes 2 args
//1.key
//2.value
// app.set("view engine", "ejs"); //this is render with ejs
// app.set("view engine", "hbs"); //specify the views folder

const path = require("path");
const express = require("express");
const app = express();
const helmet = require("helmet");
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
); //security middleware

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());
app.set("view engine", "ejs"); //specify the views folder
app.set("views", path.join(__dirname, "views")); //optional if your views folder is in the root directory
//app.set("view engine", "ejs");
function validateUser(req, res, next) {
  res.locals.validate = true;
  next();
}
app.use(validateUser); //this middleware will run for every incoming request.
app.get("/about", (req, res, next) => {
  res.render("about", {});
});
app.get("/", (req, res, next) => {
  res.render("index", {
    name: "John",
    age: 30,
    hobbies: ["reading", "traveling", "swimming"],
    html: ` <p>
        <img src="https://images.pexels.com/photos/34239903/pexels-photo-34239903.jpeg"></img>
      </p>`,
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
