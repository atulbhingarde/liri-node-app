console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID.replace("\r",""),
  secret: process.env.SPOTIFY_SECRET.replace("\r","")
};
exports.moVie = { 
  id: process.env.movieDbId.replace("\r",""),
  secret: process.env.movieDbKey.replace("\r","")
};
