// var Spotify = require('node-spotify-api');
var BandsInTownEvents = require('bandsintown-events');
// const https = require('https');
const request = require('request');

module.exports = 
{ 
  aboutThisConcert: function aboutThisConcert(thisItem) 
   {
    const MyUrl='https://rest.bandsintown.com/artists/'+thisItem+'/events?app_id=codingbootcamp';
    console.log(MyUrl);
    request(MyUrl, { json: true }, (err, res ) => {
     if (err) { return console.log(err); }
     var myJSON = JSON.stringify(res.body);
     res.body.forEach(function(myOffers){
      console.log("Venue Name  : " + myOffers.venue.name+" Venue Location : "+myOffers.venue.country+" "+myOffers.venue.city);

     });

      });
    
    
},};