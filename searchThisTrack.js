var Spotify = require('node-spotify-api');
const myKeys = require('./keys.js');

var spotify = new Spotify({
  id: myKeys.spotify.id,
  secret: myKeys.spotify.secret
});
   module.exports = {

   
    searchTrack: function searchTrack(thisTrack) {
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
}