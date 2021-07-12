'use strict'
const axios=require('axios');
let memory =[]
function getWeatherHandler(req,res){
    let cityInfo = req.query.searchQuery;
    let query2=req.query.searchQuery;
    let weatherUrl2=`https://api.weatherbit.io/v2.0/forecast/daily?city=${cityInfo}&key=${process.env.WEATHER_API_KEY}`
console.log('m');
if (memory[query2]!== undefined){
let cashData=memory[query2].data.map((item,index)=>{
    return new City (item)
}
)
res.send(cashData)
} else {

let weathrM;
axios.get(weatherUrl2)
.then (searchData=>{
    weathrM= searchData.data
    memory[query2]=weathrM
    let weatherArray=(weathrM.data.map((element)=>{
        return new City (element)}))
    
    res.send(weatherArray)
})
    .catch
    (error=>{
        res.status.send(error)
})
}
}
class City {
    constructor(allData){
        this.date=allData.valid_date;
        this.description=allData.weather.description;

    }
}
module.exports= getWeatherHandler ;