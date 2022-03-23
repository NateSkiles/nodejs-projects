const path = require('path');
const express = require('express');

console.log(path.join(__dirname, '../public'));

const app = express();
const publicDirPath = path.join(__dirname, '../public')

app.use(express.static(publicDirPath))

app.get('', (req, res) => {
    res.send('<h1>Hello World</h1>');
})

app.get('/weather', (req, res) => {
    res.send({
        location: "Portland",
        forecast: "Overcast"
    });
})

app.listen(3000, () => {
    console.log('Server port is up on port 3000!');
})

