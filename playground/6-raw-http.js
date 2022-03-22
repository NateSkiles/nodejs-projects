const https = require('https')
const API_KEY = '' // Insert mapbox API key


const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/portland.json?limit=1&access_token=${API_KEY}`

const request = https.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        // console.log(body);

        for (const key in body.features) {
            if (Object.hasOwnProperty.call(body.features, key)) {
                console.log(body.features[0].text);
                
            }
        }
    })
})
request.end()
