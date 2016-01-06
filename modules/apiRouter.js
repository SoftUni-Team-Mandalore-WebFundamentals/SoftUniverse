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

var lastRequest;

router.post('/storyline',function(req,res,next){
  if (req.body.text.length > 42) {
      res.send("Don't try to break me, get off my universe.");
      return;
  }

  var message;
  var token = req.body.text.substring(0,3);
  var string = req.body.text.substring(token.length);
  var result = false;
  switch(token){
    case '-EN':
      result = stringUtils.validateStringEN(string.trim());
      break;
    case '-BG':
      result = stringUtils.validateStringBG(string.trim());
      break;
    case '-SH':
      message = 'Are you crazy, we don\'t tolerate shliokavica in our universe!';
      break;
    case '-D!':
      if(lastRequest == undefined){
        lastRequest = '-D!';
        message = 'Please enter password to delete the story.<br>/add-story -D! {password}';
      }
      else {
        lastRequest = undefined;
        if (string.trim() == 'laluger') {
          fs.truncate('private/storyline.txt',0, function(err){
            if(err) console.log(err);
          });
          message = 'Story deleted succesfully';
        }else {
          message ='Invalid password!';
        }
      }
      break;
  }

  if (!result) {
    res.send(message || 'Error, your text must be invalid..Try again!');
    return;
  }
  fs.appendFile('private/storyline.txt', string + '\r\n', 'utf8', function(err){
      if (err) res.send('Error while adding story...');
      else res.send('Story succesfully added');
  });
});

module.exports.router = router;
