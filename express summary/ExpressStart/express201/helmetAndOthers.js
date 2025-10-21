const express = require("express");
const app = express();
const helmet = require("helmet");

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.post("/ajax", (req, res) => {
  res.json("Hello from AJAX");
  console.log("AJAX Request Received");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
