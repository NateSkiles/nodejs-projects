const dotenv = require('dotenv').config();
const request = require('postman-request');
const moment = require('moment');
const geocode = require('./utils/geocode');

// Weatherstack API Key
// const WS_TOKEN = process.env.API_KEY_WS


// // API Call
// const query_latlong = '45.5152,-122.6784&units=f'
// const weather_url = `http://api.weatherstack.com/current?access_key=${WS_TOKEN}&query=${query_latlong}`

// const weather_options = {
//     url: weather_url,
//     json: true
// }

// request(location_options, (err, res) => {
//     if (err) {
//         console.log('Unable to connect to location service. 🙁');
//     } else if (res.body.error) {
//         console.log('Unable to find location 🕵️‍♂️');
//     } else if (res.body.features.length === 0) {
//         console.log('No locations found, try searching for a new location.')
//     } else {
//         let data = res.body.features[0]
//         console.log(`${data.location}'s location:\n\tLat: ${data.center[1]}\n\tLong: ${data.center[0]}`)
//     }
// })

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


geocode('Portland', (e, data) => {
    console.log('Error', e);
    console.log('Data', data)
})