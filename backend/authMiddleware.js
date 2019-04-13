const jwt = require("jsonwebtoken");
const db = require("./data");
const APP_SECRET = "myappsecret";

const lookupUser = ({ username, password }) => {
  return db().user.find(
    u => u.username === username && u.password === password
  );
};

module.exports = function(req, res, next) {
  if (req.url == "/api/login" && req.method == "POST") {
    const user = lookupUser(req.body);
    if (user) {
      const token = jwt.sign(
        { data: user.username, expiresIn: "1h" },
        APP_SECRET
      );
      delete user.password;
      res.json({ loggedIn: true, token, user });
    } else {
      res.json({ loggedIn: false });
    }
    res.end();
    return;
  } /* any other secured api endpoint */ else {
    let token = req.headers["authorization"];
    if (token != null && token.startsWith("Bearer")) {
      token = token.substring(7);
      try {
        jwt.verify(token, APP_SECRET);
        next();
        return;
      } catch (err) {
        console.log({ err });
      }
    }
    res.statusCode = 401;
    res.end();
    return;
  }
  next();
};
