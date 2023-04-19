const panel = require('./data/descriptionPanel.json');
const whatelse = require('./data/whatElsePanel.json');
const spots = require('./data/spotsFishing.json');
const shopping = require('./data/shoppingItems.json');
const myArticles = require('./data/myArticles.json');

/************************************ */

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
require('dotenv').config();
console.log(process.env.DB_USER);

/************************************ */

const db = require('./db.config');

/************************************ */

const auth_admin = require('./routes/admin');

/************************************ */

app.use(cors());
app.use(express.json());
/************************************ */


app.get('/', (req, res) => res.send("I'm online !"));

app.use('/auth', auth_admin);

app.get('*', (req, res) => res.status(501).send('Error !'));






app.get('/panel', (req, res) => res.send(panel));

app.get('/whatelse', (req, res) => res.send(whatelse));

app.get('/spots', (req, res) => res.send(spots));

app.get('/shopping', (req, res) => res.send(shopping));

app.get('/myArticles', (req, res) => res.send(myArticles));


db.authenticate()
.then(() => {
    console.log('Connexion à la base de données réussie !');})
.then(() => {
    app.listen(port, () => console.log(`Listening on port ${port}`));
})
.catch((err) => {
    console.log('Connexion à la base de données échouée !');
});