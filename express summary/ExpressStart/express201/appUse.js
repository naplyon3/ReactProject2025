const express = require("express");
const app = express();
const path = require("path");
// Express =2 things
// 1.Router
// 2.Middleware That comprises a webframwork
// We Have req and res Middleware is someting we want to happen between req and res
// Req------------Middleware--------> res
// Middleware is a function that has access to req , res ,next object

// Req------------Middleware--------> res
// 1.Request comes in
// 2.We need to validate the user ,sometimes
// 3.we need to store some things in the debugger
// 4.if there is data from the user we need to parse it and store it
// 5.Res
function validateUser(req, res, next) {
  //get info from the request
  // do some stuff with the DB
  res.locals.validated = true; // we can store things in res.locals
  console.log("Validating User RAN");
  next(); // This will move to the next middleware
}
app.get("/", validateUser);
//app.use(validateUser); // This will run for every route
// app.get("/admin", (req, res, next) => {
//   console.log("This is the first middleware");
//   res.send("Hello from the first middleware");
//   next(); // This will move to the next middleware
// });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
