'use strict';
var xmlhttp;

function processData() {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        var movieJSON = xmlhttp.responseText;
        movieJSON = JSON.parse(movieJSON);
        console.log(movieJSON);

        var title = movieJSON.Title,
            year = movieJSON.Year,
            genre = movieJSON.Genre,
            director = movieJSON.Director,
            actors = movieJSON.Actors,
            plot = movieJSON.Plot,
            rating = movieJSON.Rated,
            posterURL = movieJSON.Poster;

        document.getElementById('poster').src = posterURL;
        document.getElementById('movieTitle').innerHTML = "<h1>" + title + " [" + rating + "], " + year + "</h1>";
        document.getElementById('movieGenre').innerHTML = "<p>Genre(s): " + genre + "</p>";
        document.getElementById('movieDirector').innerHTML = "<p>Director(s): " + director + "</p>";
        document.getElementById('movieActors').innerHTML = "<p>Actors: " + actors + "</p>";
        document.getElementById('moviePlot').innerHTML = "<p>Plot: " + plot + "</p>";
        document.getElementById('results').style.border = "1px solid black";
        document.getElementById('results').style.margin = "50px 0";
    }
}

function getMovieInfo() {
    var title = document.getElementById('title').value,
        url = "http://www.omdbapi.com/?t=" + title + "&plot=full&r=json";
    if (title === null || title === "") {
        alert("Please enter a valid movie title");
        return;
    }
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = processData;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

window.onload = function() {
    document.getElementById('btnGetInfo').addEventListener('click', getMovieInfo, false);
}