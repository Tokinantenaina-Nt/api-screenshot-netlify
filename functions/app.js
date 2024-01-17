const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const serverless = require('serverless-http')
const routes = require('../routes')
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/.netlify/functions/app', routes)

module.exports.handler = serverless(app)