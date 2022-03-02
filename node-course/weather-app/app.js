const dotenv = require('dotenv').config();
const request = require('postman-request');
const moment = require('moment');

// Weatherstack API Key
const WS_TOKEN = process.env.API_KEY_WS
// Mapbox token
const MB_TOKEN = process.env.API_KEY_MB

// API Call
const query_latlong = '45.5152,-122.6784&units=f'
const query_location = 'Portland'
const weather_url = `http://api.weatherstack.com/current?access_key=${WS_TOKEN}&query=${query_latlong}`
const location_url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query_location}.json?limit=1&access_token=${MB_TOKEN}`

const location_options = {
    url: location_url,
    json: true
}

const weather_options = {
    url: weather_url,
    json: true
}

request(location_options, (err, res) => {
    if (err) {
        console.log('Unable to connect to location service. 🙁');
    } else if (res.body.error) {
        console.log('Unable to find location 🕵️‍♂️');
    } else if (res.body.features.length === 0) {
        console.log('No locations found, try searching for a new location.')
    } else {
        let data = res.body.features[0]
        console.log(`${location}'s location:\n\tLat: ${data.center[1]}\n\tLong: ${data.center[0]}`)
    }
})

// request(weather_options, (err, res) => {
//     if (err) {
//         console.log('Unable to connect to weather service. 🙁');
//     } else if (res.body.error) {
//         console.log('Unable to find location 🕵️‍♂️');
//     } else {
//         let current = res.body.current
//         let location = res.body.location

//         console.log(`Currently in ${location.name} ${location.region}:\n\tWeather: ${current.weather_descriptions[0]}\n\tTemp: ${current.temperature}℉ and feels like ${current.feelslike}℉\n\tLocal time is: ${moment(location.localtime).format('LT')}`);
//     }
// })