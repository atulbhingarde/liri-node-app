// set the id and secret keys 
const localFile="random.txt";
const myEnv = require('dotenv').config();
// const mySpotify = require('node-spotify-api');

const myFS = require('fs');
const myKeys = require('./keys.js');
const mySearchTrack = require('./searchThisTrack.js');
const concert_this = require('./concert_this.js');
const movie_this = require('./movie_this.js');


const regexStr = /,+ +/; // this regex parses the string with multiple sequential , and space i.e. ", " and ",, " and ",,  " are same as ","

var myWords = Array(); 


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
   console.log('Here looking for concert');
   // let yy = process.argv[3].replace(" ","+");
   process.argv[3] = process.argv[3].replace(" ","+");
   concert_this.aboutThisConcert(process.argv[3]);
   break;
  case 'movie-this':
   console.log('Here looking for movie');
   // let yy = process.argv[3].replace(" ","+");
   // process third parameters exparting a name
   // if nothing change it to Mr. Nobody
   console.log("array length" + process.argv.length);
   if ( process.argv.length === 4 ) 
    { t = process.argv[3].replace(" ","+"); }
   else { t = "Mr. NoBody" ;}

   // if ( process.argv[3] === "\|+" ) { process.argv[3] = "Mr. Nobody"; }
   movie_this.aboutThisMovie(t);
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
