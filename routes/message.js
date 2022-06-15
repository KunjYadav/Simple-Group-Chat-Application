const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send(`<form action="/" onsubmit="localStorage.getItem('username'), document.getElementById('username').value)" method="POST">
  <input type="text" name="message" id="message"placeHolder="message">
  <input name="username" id="username">
  <button type="submit">send</button></form>`);
});

router.post('/', (req, res, next) => {
 
  console.log(req.body);
  res.send('<h1>this application works like a group chat.Congratulations!!!!</h1>')

});


module.exports = router;
