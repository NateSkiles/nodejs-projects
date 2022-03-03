const dotenv = require('dotenv').config();
const request = require('postman-request');
const moment = require('moment');

// Weatherstack API Key
const API_KEY = process.env.API_KEY_WS

const forecast = (lat, long, callback) => {
    // API Call
    const latLong = encodeURIComponent(`${lat},${long}`)
    const units = 'f'
    const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${latLong}units=${units}`

    const options = {
        url: url,
        json: true
    }
    request(options, (err, res) => {
        if (err) {
            callback('Unable to connect to weather service. 🙁');
        } else if (res.body.error) {
            callback('Unable to find location 🕵️‍♂️');
        } else {
            let current = res.body.current
            let location = res.body.location
            callback(undefined, {
                    name: location.name,
                    region: location.region,
                    description: current.weather_descriptions[0],
                    feelsLike: current.feelslike,
                    localTime: moment(location.localtime).format('LT')
                }
            )
        }
    })
}

module.exports = forecast