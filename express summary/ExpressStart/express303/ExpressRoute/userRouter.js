///npm install express-generator -g    -g means i want to install this globle
///on the root  express myNewExpressSite

const express = require("express");
let router = express.Router();
function validateUser(req, res, next) {
  res.locals.validated = true;
  console.log("validated!");
  next();
}
//validateUser is middleare that will only be added to this route.
//in other words,the main router does not know about it.this middleare will only exetuted in this route as you see
router.use(validateUser);
router.get("/", (req, res, next) => {
  res.send({
    msg: "user Router works",
  });
});
module.exports = router;
