const express = require('express');
const app = express();
const dotenv = require('dotenv').config(); 
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) =>{
    res.status(200).send({
        'location': 'home page'
    })
})

app.get('/easter', (req, res) =>{
res.status(200).send({
	'location': 'easter eggs'
})
})

app.listen(PORT, (err) =>{
    console.log(`Hello NodeJS on port: ${PORT}`);
});
