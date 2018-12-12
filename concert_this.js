// var Spotify = require('node-spotify-api');
var BandsInTownEvents = require('bandsintown-events');
// const https = require('https');
const request = require('request');

module.exports = 
{ 
  aboutThisConcert: function aboutThisConcert(thisItem) 
   {
    var MyUrl = 'https://rest.bandsintown.com/artists/'+thisItem+'/events?app_id=codingbootcamp' ;
    console.log("Here :" + MyUrl);
    request(MyUrl, { json: true }, (err, res ) => {
     if (err) { return console.log(err); }
     var myJSON = JSON.stringify(res.body);
     // console.log(res.body);
     // console.log(myJSON);
     // console.log(myJSON.offers[0]);
     res.body.forEach(function(myOffers){
                       console.log("\n Venue Name  : " + myOffers.venue.name+
                                   "\n Venue Location : "+myOffers.venue.country+
                                   "\n venue city : "+myOffers.venue.city+
                                   "\n date "+myOffers.datetime);

                  });

      });

},};