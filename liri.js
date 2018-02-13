require("dotenv").config();

var fs = require("fs");

var request = require("request");

var keys = require("./keys.js");

var Twitter = require("twitter");

// var Spotify = require("node-spotify-api");

// console.log('keys: ', keys);


// var liriArgument = process.argv[2];
// var userINPUT = process.argv[3];
// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);
// process.argv = ['node', 'liri.js', liriArgument];
// console.log(process.argv[2]);
//
// Twitter.get(path, params, callback);
// Twitter.post(path, params, callback);
// Twitter.stream(path, params, callback);

var T = new Twitter(keys.twitter);
//this is the object of twitter which will help us to call functions inside it
var params = {screen_name: "it_is_me_MC"};
// this is the param variable which will have key and value ,the key is the keyword which we are interested in searching and count is the count of it

T.get('statuses/user_timeline', params, searchedData);
// get is the function to search the tweet which three paramaters 'search/tweets', params and a callback function.

function searchedData(err, data, response) {
console.log(data[0].text);
}
// searchedData function is a callback function which returns the data when we make a search
