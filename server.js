var PORT = process.env.PORT || 3000;

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');

// Setting up express, setting views folder as public
// public also contains static content like img , css
// using ejs to render html as the view engine
var app = express();
app.set('views', __dirname + '/public');
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.render('index.html');
});

app.get('/resume', (req, res) => {
    res.send('resume page');
});

app.get('/blog', (req, res) => {
    res.send('blog page');
});

app.get('/about', (req, res) => {
    res.send('about page');
});

app.get('/contact', (req, res) => {
    res.send('contact page');
});

// similar routes are resume, blog, about, contact -> sign up now to be removed
// 

app.listen(PORT, () => {
    console.log(`App started on port ${PORT}`);
});