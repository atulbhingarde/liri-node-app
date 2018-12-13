
const myKeys = require('./keys.js');
const request = require('request');
var omdbApi = require('omdb-client');

module.exports = 
{ 
   aboutThisMovie: function aboutThisMovie(thisItem) 
   {
    // set the url with the key etc and get full details of the movie    
    const MyUrl= 'https://www.omdbapi.com/?apikey='+myKeys.moVie.secret+'&t='+thisItem+'&plot=full&type=movie';


    console.log("|"+MyUrl+"|");
    request(MyUrl, { json: true }, (err, res ) => {
     if (err) { return console.log(err); }
     var myJSON = JSON.stringify(res.body);
     var yy_parsed = JSON.parse(myJSON);
     console.log("\nTitle : "+yy_parsed.Title+"\nYear : "+yy_parsed.Year+
                 "\n Source : "+yy_parsed.Ratings[0].Source+" "+yy_parsed.Ratings[0].Value+
                 "\n Source : "+yy_parsed.Ratings[1].Source+" "+yy_parsed.Ratings[1].Value+
                 "\n Country " + yy_parsed.Country+
                 "\n Language: "+yy_parsed.Language +
                 "\n Plot: "+yy_parsed.Plot +
                 "\n Actors: " + yy_parsed.Actors);             

     });


    

},};