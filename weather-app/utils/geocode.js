const dotenv = require('dotenv').config();
const request = require('postman-request');

// Mapbox token
const API_KEY = process.env.API_KEY_MB



const geocode = (location, callback) => {
    // Encode to address to URI
    const query = encodeURIComponent(location)
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?limit=1&access_token=${API_KEY}`
    const options = {
        url: url,
        json: true
    }

    request(options, (err, res) => {
        if (err) {
            callback('Unable to connect to location service. 🙁', undefined)
        } else if (res.body.features.length === 0) {
            callback('No locations found, try searching for a new location.', undefined)
        } else {
            callback(undefined, {
                longitude: res.body.features[0].center[0],
                latitude: res.body.features[0].center[1]
            })
        }
    })
}

module.exports = geocode