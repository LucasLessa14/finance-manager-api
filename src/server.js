require('dotenv').config();
require('./database');
const routes = require('./routes');

const port = process.env.PORT || 3033;

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', routes);

app.listen(port, () => {
    console.log(`BACKEND is running on port ${port}`)
});