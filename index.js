const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')

const port = 3000;
const routes = require('./routes')
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/', routes)
app.listen(port, () => {
    console.log(`L'application écoute sur le port ${port}`);
});
