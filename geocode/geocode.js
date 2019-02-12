const request = require('request');

var geocodeAddress = (address,callback) => {
    var encodedAddress = encodeURIComponent(address);
    request({
        //url: 'http://www.mapquestapi.com/geocoding/v1/address?key=gzAnQ8ty2sm8zEHMTJAfHrwxbHGlduXi&location=1301%20lombard%20street%20philadelphia',
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=gzAnQ8ty2sm8zEHMTJAfHrwxbHGlduXi&location=${encodedAddress}`,
        json: true
    },(error,response,body)=> {
        if(error) {
            callback('Unable to connect to Google servers.');
        } else if(body.status === 'ZERO_RESULTS') {
            callback('unable to find that address.');
        } else if(body.status === 'OK') {
            
            callback(undefined,{
                address: body.results,
                latitude: body.results[0].locations[0].latLng.lat,
                longitude: body.results[0].locations[0].latLng.lng
            });
        } else {
            callback(undefined,{
                //address: body.results,
                latitude: body.results[0].locations[0].latLng.lat,
                longitude: body.results[0].locations[0].latLng.lng
            });
        }
    });
};

module.exports = {
    geocodeAddress
}