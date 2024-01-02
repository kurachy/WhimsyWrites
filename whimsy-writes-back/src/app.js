const express = require('express');
const bodyParser = require('body-parser');
const articleRoutes = require('./routes/articleRoutes');
const userRoutes = require('./routes/userRoutes')
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use('/api', articleRoutes);
app.use('/api', userRoutes);

module.exports = app;