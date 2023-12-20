const express = require('express');
const bodyParser = require('body-parser');
const articleRoutes = require('./routes/articleRoutes');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use('/api', articleRoutes);

module.exports = app;