const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET_PHRASE = process.env.JWT_SECRET_PHRASE; //Get the "JWT_SECRET_PHRASE". Stored in "BackEnd\Tut120.0\NoteCloud-Backend\.env"

let getUser = (req, res, next) => {
  let authToken = req.header("auth-token"); //When i will make a request, i will include the jwt auth token in "auth-token" header

  try {
    let dataInJwtToken = jwt.verify(authToken, JWT_SECRET_PHRASE);

    //Extract "user" from jwt token and add it to request object "req"
    req.user = dataInJwtToken.user;

    next();
  } catch (err) {
    res.status(401).send("Invalid Auth Token");
  }
};

module.exports = {
  getUser
};
