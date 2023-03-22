const express = require('express');
const app = express();
const port = 3001;
const panel = require('./data/descriptionPanel.json');
const whatelse = require('./data/whatElsePanel.json');
const spots = require('./data/spotsFishing.json');
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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});