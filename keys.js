console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
exports.moVie = { 
  id: process.env.movieDbId,
  secret: process.env.movieDbKey
};