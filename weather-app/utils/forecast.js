const dotenv = require('dotenv').config();
const request = require('postman-request');
const moment = require('moment');

// Weatherstack API Key
const API_KEY = process.env.API_KEY_WS

const forecast = (lat, long, callback) => {
    // API Call
    const latLong = `${lat},${long}`
    const units = 'f'
    const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${latLong}&units=${units}`

    const options = {
        url,
        json: true
    }
    request(options, (err, { body }) => {
        if (err) {
            callback('Unable to connect to weather service. 🙁');
        } else if (body.error) {
            callback('Unable to find location 🕵️‍♂️');
        } else {
            let { name, region } = body.location
            let { weather_descriptions, temperature, feelslike: feelsLike, precip, cloudcover: cloudCover, localtime } = body.current

            callback(undefined, {
                name,
                region,
                description: weather_descriptions[0],
                temperature,
                feelsLike,
                precip,
                cloudCover,
                localTime: moment(localtime).format('LT')
            }
            )
        }
    })
}

module.exports = forecast