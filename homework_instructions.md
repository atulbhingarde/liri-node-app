# The  **_liri_**  app 
## ***Atul Bhingarde***

## **_Liri_**  is commad line node based app that allows your to query information related to the artist, concert, music, songs.

Details are described as under .

 1. Basic command is **_node liri.js operator [parameter]_** where -
 	 * ***node*** is the utility program being used.
	 * liri.js is an utility developed for the purpose as part of this project.
	 * ***operator*** could be 	 
		 * *spotify-this-song* to locate the song and related information.
			 * required parameter is *song* 
*for example to locate the song "My heart will go on"
_node liri.js spotify-this-song_  **_"My heart will go on"_**
![Alt text](/screen_shots/spotify-this-song.png?raw=true "spotify-this-song")
which displays - 
				* artists name
				*	The songs name
				*	review of the song from spotify
				*	The album name that song is from
    
		-   *concert-this* to locate the information about the concert related information based on the ***artist*** or  ***band*** , use command as follows 
			- _node liri.js concert-this_  **_"Rod Stewart"_**  
![Alt text](/screen_shots/concert-this.bmp?raw=true "concert-this")
which displays -
				- Venue name
				- Venue 
					- country
					- City
			- _node liri.js concert-this_  **_"Metallica"_**  ![Alt text](/screen_shots/concert-this.bmp?raw=true "concert-this")
				- which displays -
					- Venue name
					- Venue 
					- Country
					- City
		-  *do-what-it-says* to get details for songs listed in the file ***random.txt*** file is "," quoma delimited. command is as follows
			- _node liri.js do-what-it-says_  ![Alt text](/screen_shots/do-what-it-says.png?raw=true "do-what-it-says")
				- Which displays
					- Artists name
					- Track name
					- Album name
					- Preview Url 
					- Track Url from Spotify
   
		-  *do-what-it-says* to get details for songs listed in the file ***random.txt*** file is "," quoma delimited. command is as follows
_node liri.js spotify-this-song '<song name here>'_  
![Alt text](/screen_shots/spotify-this-song.png?raw=true "do-what-it-says")
		* Which displays
			* Artists name
			* Track name
			* Album name
			* Preview Url 
			* Track Url from Spotify
   
-   _node liri.js movie__this_  **_"Titanic"_**  
![Alt text](/screen_shots/movie-this.png?raw=true "movie-this")
		* Which displays
			* Title of the movie.
			* Year the movie came out.
			* IMDB Rating of the movie.
			* Rotten Tomatoes Rating of the movie.
			* Country where the movie was produced.
			* Language of the movie.
			* Plot of the movie.
			* Actors in the movie.
-   _node liri.js movie__this_ 
![Alt text](/screen_shots/mr_nobody.png?raw=true "mr-nobody")
		* Which displays
			* Title of the movie.
			* Year the movie came out.
			* IMDB Rating of the movie.
			* Rotten Tomatoes Rating of the movie.
			* Country where the movie was produced.
			* Language of the movie.
			* Plot of the movie.
			* Actors in the movie.
