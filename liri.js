// set the id and secret keys 
const localFile="random.txt";
const myEnv = require('dotenv').config();
const mySpotify = require('node-spotify-api');

const myFS = require('fs');
const myKeys = require('./keys.js');

const regexStr = /,+ +/; // this regex parses the string with multiple sequential , and space i.e. ", " and ",, " and ",,  " are same as ","

var myWords = Array(); 
// console.log(myEnv);
// console.log(myKeys);
// now set up the spotify object with keys 
const nspotify = new mySpotify(myKeys.spotify);
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
   searchTrack(process.argv[3]);
   break;
  case 'concert-this':
   console.log('Here');
   break;
  default:
   console.log('need help ?' );
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
  searchTrack(myWords[1]); 

}); }
function searchTrack(thisTrack) {
 // console.log(" I love this now " + thisTrack);

// console.log(" here outside in global area " + myWords[1]);
// spotify.search({ type: 'track', query: 'I%20want%20it%20that%20way' , limit:10 }, function(err, data) {
// spotify.search({ type: 'track', query: 'My Heart Will Go On' , limit:10 }, function(err, data) {
spotify.search({ type: 'track', query: thisTrack , limit:1 }, function(err, data) {

  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
// console.log(data); 
// console.log(data.tracks);
var myJSON = JSON.stringify(data);
// console.log(myJSON);
// const myAlbum  = JSON.stringify(data.album);
// data.tracks.items.forEach(function(myAlbum){
//  console.log(myAlbum.artist);
// });

data.tracks.items.forEach(function(myTrack){
 // ha ha 
 // console.log(myTrack.preview_url+" "+myTrack.name+" "+myTrack.popularity+" "+myTrack.duration_ms," " + myTrack.album);
 numArtists=myTrack.album.artists.length;
 for(nArtists=0;nArtists<numArtists;nArtists++) {
  console.log("\n"+myTrack.album.artists[nArtists].name);
 }
 console.log("track name " + myTrack.name+"\n"+
             "album name " + myTrack.album.name+"\n"+
             "album url " + myTrack.album.external_urls.spotify+"\n"+
             "preview url " + myTrack.preview_url+"\n"+
             "track url " + myTrack.external_urls.spotify);
 
});
});}