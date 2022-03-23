const path = require('path');
const express = require('express');

console.log(path.join(__dirname, '../public'));

const app = express();

const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates')

// Sets handlebars as view engine
app.set('view engine', 'hbs');
// Templates path
app.set('views', viewsPath)
app.use(express.static(publicDirPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'weather',
        name: 'Nate'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Nate'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'Hey, listen!'
    })
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

