const express = require("express");
//an "app" is an express function!
const app = express();

app.all("/", (req, res) => {
  // Express handles the basic Headers(status code ,mim-type)! Awesome!
  // Express handles the end! Awesome!
  res.send("Hello from Express");
});
app.listen(3000);
console.log("Listening on port 3000");
