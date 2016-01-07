var fs = require('fs');

var allowedChars = ' ,.!?()[]/\\-=@#$%^&*_+|><"\'';

var allowedBG = [
  'а','б','в','г','д','е',
  'ж','з','и','й','к','л',
  'м','н','о','п','р','с',
  'т','у','ф','х','ц','ч',
  'ш','щ','ь','ъ','ю','я'
];

var allowedEN = 'abcdefghijklmnopqrstuvwxyz';

function isInArray(array,str){
  var length = array.length;
  for (var i = 0; i < length; i++) {
    if (array[i] === str) {
      return true;
    }
  }
  return false;
}

function validateStringBG(string){
  if (typeof string != 'string') {
    return false;
  }
  for (var i = 0; i < string.length; i++) {
    console.log(string[i].toLowerCase());
    if (isInArray(allowedBG,string[i].toLowerCase())  || allowedChars.indexOf(string[i]) !== -1) {
      continue;
    }else {
      return false;
    }
  }
  return true;
}

function validateStringEN(string){
  if (typeof string != 'string') {
    return false;
  }
  for (var i = 0; i < string.length; i++) {
    if (allowedEN.indexOf(string[i].toLowerCase()) !== -1  || allowedChars.indexOf(string[i]) !== -1) {
      continue;
    }else {
        return false;
    }
  }
  return true;
}

var startingLines = [
  "A long time ago",
  "in a galaxy far, far away...",
  "",
  "",
  " GOSHO",
  " Jedi",
  " posle loshiq umrq",
  " Nakov got drunk",
  " я па ти",
  " Здравко защо няма манджа!",
  " Imalo edno vreme edin chovek",
  " koito ne si beshe napravil saita",
  " kakto trqbva i horata vlizaha",
  " i go chupeha mnogo jestoko",
  " shtoto ",
  " sa uchili v softuni i sa mnogo",
  " inteligentni WE"
];

function readFileToStringArray(path){
  var fileContents = readFile(path);
  var result = [];
  for (var i = 0; i < startingLines.length; i++) {
    result.push(startingLines[i]);
  }
  if (fileContents == null) {
    return result;
  }

  var lines = fileContents.split('\r\n');
  for (var i = 0; i < lines.length; i++) {
    if (lines[i].length > 0) {
      result.push(lines[i]);
    }
  }
  return result;

};

function readFile(path){
  if (typeof path == undefined) {
    return null;
  }
  return fs.readFileSync(path, 'utf8', function(err,data){
    if (err) {
      console.warn(err);
      return "";
    }
    return data;
  });
};

module.exports.readFileToStringArray = readFileToStringArray;
module.exports.validateStringBG = validateStringBG;
module.exports.validateStringEN = validateStringEN;
