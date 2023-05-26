const express = require('express');
const cors = require('cors');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./openapi.json');
const port = 3000;
require('dotenv').config();

/************************************ */
const db = require('./db.config');  

/************************************ */
const auth_admin = require('./routes/user');
const checklist = require('./routes/checklist');
const spot = require('./routes/spot');
const material = require('./routes/material');
const fish = require('./routes/fish');
const rule = require('./routes/rule');

/************************************ */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/************************************ */
app.get('/', (req, res) => res.send("I'm online !"));

app.use('/api/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/admin', auth_admin);
app.use('/api/checklist', checklist);
app.use('/api/spot', spot);
app.use('/api/material', material);
app.use('/api/fish', fish);
app.use('/api/rule', rule);

app.get('*', (req, res) => res.status(501).send('Error !'));


/*********************************** */
db.authenticate()
.then(() => {
    console.log('Connexion à la base de données réussie !');})
.then(() => {
    app.listen(port, () => console.log(`Listening on port ${port}`));
})
.catch((err) => {
    console.log(err);
});