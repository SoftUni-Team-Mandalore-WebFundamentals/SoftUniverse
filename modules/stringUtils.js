var fs = require('fs');

var allowedBG = [
  'а','б','в','г','д','е',
  'ж','з','и','й','к','л',
  'м','н','о','п','р','с',
  'т','у','ф','х','ц','ч',
  'ш','щ','ь','ъ','ю','я'
];

var shliokavica = [
  'a','b','v','g','d','e',
  'j','z','i','y','k','l',
  'm','n','o','p','r','s',
  't','u','f','h','c','ch',
  'sh','sht','y','y','iu','ia'
]

var allowedEN = 'abcdefghijklmnopqrstuvwzyz';


function validateStringBG(string){
  if (typeof string != 'string') {
    return false;
  }
  // TODO: need some validation
  return true;
}

function validateStringEN(string){
  if (typeof string != 'string') {
    return false;
  }
  // TODO: need some validation
  return true;
}

function validateStringSH(string){
  if (typeof string != 'string') {
    return false;
  }
  // TODO: need some validation and translation to BG
  return true;
}

function readFileToStringArray(path){
  var fileContents = readFile(path);
  var result = [];
  if (fileContents == null) {
    return result;
  }

  var lines = fileContents.split('\r\n');
  var result = [];
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
