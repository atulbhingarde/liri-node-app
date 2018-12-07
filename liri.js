// set the id and secret keys 
const myEnv = require('dotenv').config();
const mySpotify = require('node-spotify-api');
const myKeys = require('./keys.js');
console.log(myEnv);
console.log(myKeys);
// now set up the spotify object with keys 
const nspotify = new mySpotify(myKeys.spotify);
console.log(myKeys.spotify.id);

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: myKeys.spotify.id,
  secret: myKeys.spotify.secret
});
 
spotify.search({ type: 'track', query: 'I%20want%20it%20that%20way' , limit:10 }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
// console.log(data); 
// console.log(data.tracks);
var myJSON = JSON.stringify(data);


data.tracks.items.forEach(function(myTrack){
 // ha ha 
 console.log(myTrack.preview_url+" "+myTrack.name+" "+myTrack.popularity+" "+myTrack.duration_ms);
 
});
});