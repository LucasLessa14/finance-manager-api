require('dotenv').config();

const port = process.env.PORT || 3033;

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req,res) => {
    res.send('BACKEND configurado')
});

app.listen(port, () => {
    console.log(`BACKEND is running on port ${port}`)
});