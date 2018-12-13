var Spotify = require('node-spotify-api');
const myKeys = require('./keys.js');

var spotify = new Spotify({
  id: myKeys.spotify.id,
  secret: myKeys.spotify.secret
});
   module.exports = {

   
    searchTrack: function searchTrack(thisTrack) {
 
   spotify.search({ type: 'track', query: thisTrack , limit:1 }, function(err, data) {
   
     if (err) {
       return console.log('Error occurred: ' + err);
     }
     var myJSON = JSON.stringify(data);
   
   
   data.tracks.items.forEach(function(myTrack)
    {
 
     numArtists=myTrack.album.artists.length;
     for(nArtists=0;nArtists<numArtists;nArtists++) 
        {
         console.log("\n"+myTrack.album.artists[nArtists].name);
        } 
     console.log("track name " + myTrack.name+"\n"+
                "album name " + myTrack.album.name+"\n"+
                "album url " + myTrack.album.external_urls.spotify+"\n"+
                "preview url " + myTrack.preview_url+"\n"+
                "track url " + myTrack.external_urls.spotify);
    
    });
   });}
};
