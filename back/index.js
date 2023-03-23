const express = require('express');
const app = express();
const port = 3001;
const panel = require('./data/descriptionPanel.json');
const whatelse = require('./data/whatElsePanel.json');
const spots = require('./data/spotsFishing.json');
const shopping = require('./data/shoppingItems.json')
const cors = require('cors');

app.use(cors());

app.get('/panel', (req, res) => {
    res.send(panel)
});

app.get('/whatelse', (req, res) => {
    res.send(whatelse)
});

app.get('/spots', (req, res) => {
    res.send(spots)
});

app.get('/shopping', (req, res) => {
    res.send(shopping)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});