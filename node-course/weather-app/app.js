const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Portland', (err, locationData) => {
    if (err) {
        return console.log(err);
    }

    forecast(locationData.latitude, locationData.longitude, (err, data) => {
        if (err) {
            return console.log(err);
        }
        //console.log(`Currently in ${location.name} ${location.region}:\n\tWeather: ${current.weather_descriptions[0]}\n\tTemp: ${current.temperature}℉ and feels like ${current.feelslike}℉\n\tLocal time is: ${moment(location.localtime).format('LT')}`);

        console.log(
            `Currently in ${data.name} ${data.region}:\n\tWeather: ${data.description}\n\tTemp: ${data.temperature}℉ and feels like ${data.feelsLike}℉\n\tLocal time is: ${data.localTime}`
        );
    })
})

