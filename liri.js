// set the id and secret keys 
const localFile="random.txt";
const myEnv = require('dotenv').config();
// const mySpotify = require('node-spotify-api');

const myFS = require('fs');
const myKeys = require('./keys.js');
const mySearchTrack = require('./searchThisTrack.js');

const regexStr = /,+ +/; // this regex parses the string with multiple sequential , and space i.e. ", " and ",, " and ",,  " are same as ","

var myWords = Array(); 
// console.log(myEnv);
// console.log(myKeys);
// now set up the spotify object with keys 
// const nspotify = new mySpotify(myKeys.spotify);
// console.log(myKeys.spotify.id);

// set the spotify api with necessary id and credentials 
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: myKeys.spotify.id,
  secret: myKeys.spotify.secret
});

switch (process.argv[2]) {
  case 'do-what-it-says':
   console.log("so you want " + process.argv[2]);
   doWhatItSays();
   break;
  case 'spotify-this-song':
   console.log('Here '+process.argv[3]);
   mySearchTrack.searchTrack(process.argv[3]);
   break;
  case 'concert-this':
   console.log('Here');
   break;
  default:
   console.log('need help ? ' + process.argv[2]);
}
function doWhatItSays()
 { 
  
myFS.readFile(`${localFile}`, function (err, data) {
  if (err) throw err;

  // conver the buffer in the string 
  thisLine = data.toString();
  
  // var myWords = regexStr.exec(thisLine);
  // var myWords = thisLine.split(/,+ +/);
  myWords = thisLine.split(regexStr);

  const lenMyWords = myWords.length ; 
  // for(i=0;i<lenMyWords;i++) { console.log("one more "+myWords[i]);}
  
  // console.log("here " , data.toString());
  mySearchTrack.searchTrack(myWords[1]); 

}); }
