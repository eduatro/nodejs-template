const express = require('express');
const Auth = require('./authenticate');

let router = express.Router();
let auth = new Auth();

router.post('/', function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  auth.login(username, password)
    .then(token => res.send(token))
    .catch(error => res.send(error));
});

module.exports = router;
