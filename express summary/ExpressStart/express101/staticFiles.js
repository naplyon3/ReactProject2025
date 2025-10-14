const express = require("express");
const app = express();
// app comes with use method to serve static files
// app requires at lease one argument -path to the static files
app.use(express.static("public"));
// now we can access the static files in the public folder
// http://localhost:3000/styles.css
// http://localhost:3000/logo192.png
// http://localhost:3000/logo512.png
// http://localhost:3000/index.html
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
