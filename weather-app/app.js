const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// Concat argv skipping first two elements
const location = process.argv.splice(2).join(' ')

if (!location) {
    console.log('Please enter a valid location.');
} else {
    geocode(location, (err, { latitude, longitude } = {}) => {
        if (err) {
            return console.log(err);
        }

        forecast(latitude, longitude, (err, data) => {
            if (err) {
                return console.log(err);
            }
            //console.log(`Currently in ${location.name} ${location.region}:\n\tWeather: ${current.weather_descriptions[0]}\n\tTemp: ${current.temperature}℉ and feels like ${current.feelslike}℉\n\tLocal time is: ${moment(location.localtime).format('LT')}`);

            console.log(data);
        })
    })

}    
