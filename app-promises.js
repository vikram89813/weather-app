const yargs = require('yargs');
const axios = require('axios');

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

    var encodedAddress = encodeURIComponent(argv.address);
    var geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=gzAnQ8ty2sm8zEHMTJAfHrwxbHGlduXi&location=${encodedAddress}`;

    axios.get(geocodeUrl).then((response)=>{
        if(response.data.status === 'ZERO_RESULTS') {
            throw new Error('Unable to find that address');
        }
        var lat = response.data.results[0].locations[0].latLng.lat;
        var lng= response.data.results[0].locations[0].latLng.lng;
        var url = `https://api.darksky.net/forecast/67b0d79cde1bc9821f74ad854a122ae7/${lat},${lng}`;
        return axios.get(url);
    }).then((response) => {
        var temperature = response.data.currently.temperature;
        var apparentTemperature = response.data.currently.apparentTemperature;
        console.log(`its currently : ${temperature}, but it feels like : ${apparentTemperature}`);
    })
    .catch((e)=>{
        if(e.code === 'ENOTFOUND'){
            console.log('unable to connect to api server.');
        } else {
            console.log(e);
        }
    });
