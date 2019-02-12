const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
    .options({
        address: {
            demand: true,
            alias: 'a',
            describe: 'Address to fetch the weather',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

    
    geocode.geocodeAddress(argv.address, (errorMessage, results) =>{
        if(errorMessage) {
            console.log(errorMessage);
        } else {
            //console.log(JSON.stringify(results,undefined,2));
            weather.getWeather(results.latitude,results.longitude, (errorMessage, weatherResults) => {
                if(errorMessage) {
                    console.log('unable to fetch weather data.');
                } else {
                    console.log(`Its currently : ${weatherResults.temperature}`);
                    console.log(`But it feels like : ${weatherResults.apparentTemperature}`);
                }
            })
        }
    });



