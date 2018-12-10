// var Spotify = require('node-spotify-api');
// var BandsInTownEvents = require('bandsintown-events');
var imdb = require('imdb-api');
const myKeys = require('./keys.js');
// const https = require('https');
const request = require('request');
var omdbApi = require('omdb-client');

module.exports = 
{ 
   aboutThisMovie: function aboutThisMovie(thisItem) 
   {
      
 
      var params = {
          apiKey: 'f1827804' ,
          query: 'Titanic' ,
          incTomatoes: true ,
          plot: 'full' ,
          type: 'movie' ,
          tomatoes: true,
          timeout: 100
      };
      omdbApi.search(params, function(err, data) {
          // process response...
          var myJSON = JSON.stringify(data);

          // console.log(" 123 Here " + data);
      });
    // const MyUrl='https://www.omdbapi.com/apikey'+'&apikey='+moVie.secret+'?t='+thisItem;
    //console.log(myKeys.moVie.secret);
    // const MyUrl='https://www.omdbapi.com/?'+'apikey='+myKeys.moVie.secret+'&t='+thisItem;
    
    // const MyUrl= `https://www.omdbapi.com/?i=tt3896198&apikey=f1827804&s=Titanic`;
    const MyUrl= 'https://www.omdbapi.com/?apikey=f1827804&t=Titanic&plot=full&type=movie';
    // console.log("|"+MyUrl+"|");
    request(MyUrl, { json: true }, (err, res ) => {
     if (err) { return console.log(err); }
     var myJSON = JSON.stringify(res.body);
     // console.log(myJSON.Title);
     // var yy = res.body; 
     var yy_parsed = JSON.parse(myJSON);
     console.log("\nTitle : "+yy_parsed.Title+"\nYear : "+yy_parsed.Year+
                 "\n Source : "+yy_parsed.Ratings[0].Source+" "+yy_parsed.Ratings[0].Value+
                 "\n Source : "+yy_parsed.Ratings[1].Source+" "+yy_parsed.Ratings[1].Value+
                 "\n Country " + yy_parsed.Country+
                 "\n Language: "+yy_parsed.Language +
                 "\n Plot: "+yy_parsed.Plot +
                 "\n Actors: " + yy_parsed.Actors);             
                 
     
     // var myJSON = JSON.parse(yy_parsed);
     // console.log(myJSON);
     // console.log(yy_parsed.Ratings.Source);
     // res.body.forEach(function(myOffers){
     // console.log("Venue Name  : " + myOffers.venue.name+" Venue Location : "+myOffers.venue.country+" "+myOffers.venue.city);

     });


    
// https://www.omdbapi.com/?i=tt3896198&apikey=f1827804&t=titanic
// https://www.omdbapi.com/?apikey=f1827804&t=Titanic
},};