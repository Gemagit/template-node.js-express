const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'));

// Configuración de PUG - Motor de plantillas
app.set('view engine', 'pug');
app.set('views', './views');

// http://localhost:3000/
app.get("/home", (req, res) => {
    res.render('home.pug');
});
app.get("/about", (req, res) => {
    res.render('about.pug');
});
app.get("/location", (req, res) => {
    res.render('location.pug');
});
app.get("/mission", (req, res) => {
    res.render('mission.pug');
});
app.get("/contact", (req, res) => {
    res.render('contact.pug');
});


// http://localhost:3000
app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`);
});