const dotenv = require('dotenv').config();
const request = require('postman-request');
const moment = require('moment');

// Weatherstack API Key
const API_KEY = process.env.API_KEY
// API Call
const query = "45.5152,-122.6784&units=f"
const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${query}`

const options = {
    url: url,
    json: true
}

request(options, (error, response) => {
    let current = response.body.current
    let location = response.body.location

    console.log(`Currently in ${location.name} ${location.region}:\n\tIt is ${current.temperature}℉ out and feels like ${current.feelslike}℉\n\tThe local time is: ${moment(location.localtime).format('LT')}`);
})

