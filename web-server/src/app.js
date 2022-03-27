const path = require('path');
const express = require('express');
const hbs = require('hbs');

console.log(path.join(__dirname, '../public'));

const app = express();

// Define paths for express config
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Set up handlebars engine and views
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Static Directory
app.use(express.static(publicDirPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'weather',
        name: 'Nate Skiles'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Nate Skiles'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'Hey, listen!',
        title: 'Help',
        name: 'Nate Skiles'
    });
});

app.get('/weather', (req, res) => {
    res.send({
        location: "Portland",
        forecast: "Overcast"
    });
});

app.get('/products', (req, res) => {
    console.log(req.query);
    res.send({
        products: []
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        error: 'Help article not found. 😢'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        error: 'Page not found 🔎'
    });
});

app.listen(3000, () => {
    console.log('Server port is up on port 3000!');
});

