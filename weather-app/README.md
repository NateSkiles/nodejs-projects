# Weather App

Using the Weatherstack and Mapbox API's, pass a location to the app and recieve time/temp data about it.

### Install app:
```$ npm install```

### Run App:
Pass a location to the app as an argument.
```
$ node app.js Portland
//
// ->
// Currently in Portland, Oregon:
//      Weather: Light Rain
//      Temp: 50℉ and feels like 50℉
//      Local time is: 11:50 PM
```
For cities with spaces, add quotations ```" "``` around the text or simple enter the full name as an argument.
```terminal
$ node app.js New York     
Currently in Long Island, City New York:
        Weather: Overcast
        Temp: 46℉ and feels like 41℉
```