var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
var stringUtils = require('./stringUtils.js');
var fs = require('fs');

router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json());

router.get('/storyline',function(req,res,next){
  res.json(stringUtils.readFileToStringArray('private/storyline.txt'));
});

router.post('/storyline',function(req,res,next){
  var token = req.body.text.substring(0,3);
  var string = req.body.text.substring(token.length);
  /*
  var language;
  switch(token){
    case '-EN':
      break;
    case '-BG':
      stringUtils.validateStringBG(string.trim());
      break;
    case '-SH':
      language = 2;
      break;
  }*/

  fs.appendFile('private/storyline.txt', string + '\r\n', 'utf8', function(err){
      if (err) res.send('Error while adding story...');
      else res.send('Story succesfully added');
  });
});

module.exports.router = router;
