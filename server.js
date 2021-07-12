'use strict';
const express =require ('express');
require ('dotenv').config();
const axios=require('axios');

const cors = require('cors');

const weather=require('./data/weather.json')

const server =express();
const PORT = process.env.PORT;

server.use(cors());

server.get('test',testHandler)
server.get('/weather', getWeatherHandler);
server.get('/movie', getMovieHandler)

function testHandler(req,res){
    res.status(200).send('server is working')
}
// https://api.weatherbit.io/v2.0/forecast/daily
// function getWeatherHandler(req,res){
//     let cityInfo = req.query.searchQuery;
    
//     let weatherUrl2=`https://api.weatherbit.io/v2.0/forecast/daily?city=${cityInfo}&key=${process.env.WEATHER_API_KEY}`
// console.log('m');

// let weathrM;
// axios.get(weatherUrl2)
// .then (searchData=>{
//     weathrM= searchData.data
//     let weatherArray=(weathrM.data.map((element)=>{
//         return new City (element)}))
    
//     res.send(weatherArray)
// })
//     .catch
//     (error=>{
//         res.status.send(error)
// })
// }

// function getMovieHandler(req,res){
//     let cityName = req.query.searchQuery;

// let movieUrl=`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${cityName}`
// let movies;
// axios.get(movieUrl)
// .then (movieInfo=>{
//     movies=movieInfo.data.res
//     let moviesArray=movies.map((movie)=>{
//         return new Movies (movie)})
//         res.send(moviesArray)
//     })
//     .catch
//     (error=>{
//         res.status.send(error)
// })

// class Movies{
//     constructor(
//         allMovies){
//         this.title = allMovies.title;
//         this.poster_path = `https://image.tmdb.org/t/p/w500/`+ allMovies.poster_path;
//         this.original_language = original_language;
//         this.vote_average = allMovies.vote_average;
//         this.overview = allMovies.overview;
//         this.vote_count = allMovies.vote_count;
//         this.popularity = popularity;
//         this.release_date = release_date;
//     }
// }
// }

// server.get('/',(req,res)=>{
//     res.status(200).send('home route')
// })

// server.get('/test',(req,res )=>
// res.status(200).send('server is working'))

// // localhost:3001/weatherInfo?cityName=
// server.get('/weatherInfo',(req,res)=>{
    
//     let cityInfo=weather.find( city=>{
//         if(req.query.cityName==city.cityName){
//             return city
//         }
        
//         })
//         const cityWeather = cityInfo.data.map(day => {
//             return new City(day.valid_date, day.weather.description)
//         })
//         res.status(200).send(cityWeather)
// })


server.get('*',(req,res)=>{
    res.status(500).send('NOT FOUND')
})



// class City {
//     constructor(allData){
//         this.date=allData.valid_date;
//         this.description=allData.weather.description;

//     }
// }



server.listen(PORT,()=>{
    console.log(`Listening to PORT ${PORT}`)
})
