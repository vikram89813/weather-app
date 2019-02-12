const request = require('request');

var getWeather =(lat,lng,callback)=>{
    request({
        url : `https://api.darksky.net/forecast/67b0d79cde1bc9821f74ad854a122ae7/${lat},${lng}`,
        json: true
    }, (error,Response,body)=>{
        if(!error && Response.statusCode == 200) {
            callback(undefined,{
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('unable to fetch weather data.');
        }
    });
};

module.exports = {
    getWeather
}

