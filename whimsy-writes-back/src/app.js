const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const articleRoutes = require('./routes/articleRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

const app = express();
app.use(cookieParser());

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
  };

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use('/api', articleRoutes);
app.use('/api', userRoutes);
app.use('/api', authRoutes);

module.exports = app;