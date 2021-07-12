'use strict'
const axios=require('axios');


function getMovieHandler(req,res){
    let cityName = req.query.searchQuery;

let movieUrl=`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${cityName}`
let movies;
let memory2=[];
let query2=[];
if (memory2[query2]!== undefined){
    let cashData=memory2[query2].data.map((item,index)=>{
        return new Movies(item)
    }
    )
    res.send(cashData)
    } else {
axios.get(movieUrl)
.then (movieInfo=>{
    movies=movieInfo.data.resultes
    memory2[query2]=movies
    let moviesArray=movies.map((movie)=>{
        return new Movies (movie)})
        res.send(moviesArray)
    })
    .catch
    (error=>{
        res.status.send(error)
})
    }
class Movies{
    constructor(
        allMovies){
        this.title = allMovies.title;
        this.poster_path = `https://image.tmdb.org/t/p/w500/`+ allMovies.poster_path;
        this.original_language = original_language;
        this.vote_average = allMovies.vote_average;
        this.overview = allMovies.overview;
        this.vote_count = allMovies.vote_count;
        this.popularity = popularity;
        this.release_date = release_date;
    }
}
}

module.exports = getMovieHandler;